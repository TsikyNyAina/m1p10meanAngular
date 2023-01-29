import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveModule } from 'projects/active/src/src';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { DirectiveModule } from './directive/directive.module';
import { ClientModule } from './page/client/client.module';
import { PageModule } from './page/page.module';
import { PipeModule } from './pipe/pipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ActiveModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
