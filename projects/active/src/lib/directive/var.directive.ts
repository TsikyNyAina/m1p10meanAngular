import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';

interface VarContext<T> {
  var: T;
  $implicit: T;
}

@Directive({
  selector: '[var]',
  exportAs: 'var',
})
export class VarDirective<T> {
  @Input() var: any;
  private context: VarContext<T | null> = { var: null, $implicit: null };
  constructor(
    @Optional() private templateRef: TemplateRef<VarContext<T>>,
    @Optional() private viewContainer: ViewContainerRef
  ) {}
  ngOnInit() {
    if (this.templateRef && this.viewContainer) {
      this.context.$implicit = this.context.var = this.var;
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    }
  }
  static ngTemplateContextGuard<T>(dir: VarDirective<T>, ctx: unknown): ctx is VarContext<T> {
    return true;
  }
}
