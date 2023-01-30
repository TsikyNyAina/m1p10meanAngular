import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveModule } from 'projects/active/src/src';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './page/client/client.module';
import { ResponsableModule } from './page/responsable/responsable.module';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
import { NZ_I18N, en_US, fr_FR } from 'ng-zorro-antd/i18n';
import { ComponentModule } from './component/component.module';
import { PageModule } from './page/page.module';
import { PipeModule } from './pipe/pipe.module';
import { DirectiveModule } from './directive/directive.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
registerLocaleData(fr);
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ActiveModule,
    ClientModule,
    ResponsableModule,
    ComponentModule,
    PageModule,
    ComponentModule,
    DirectiveModule,
    BrowserAnimationsModule,
    PipeModule,
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})

export class AppModule { }
