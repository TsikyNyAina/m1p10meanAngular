import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-active',
  template: `
    <p>
      active works!
    </p>
  `,
  styles: [
  ]
})
export class ActiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
