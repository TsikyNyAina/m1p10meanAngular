import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './page/client/client.module';
import { ResponsableModule } from './page/responsable/responsable.module';

const routes: Routes = [
  { path: '', redirectTo: '/client/loginClient', pathMatch: 'full' },
  {
    path:"client", loadChildren:()=>ClientModule
  },
  {
    path:"responsable", loadChildren:()=>ResponsableModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
