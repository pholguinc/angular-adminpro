import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { AccountSettingsComponent } from '../components/account-settings/account-settings.component';
import { PromesasComponent } from '../components/promesas/promesas.component';
import { RxjsComponent } from '../components/rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'pregress'} },
      { path: 'grafical', component: GraficalComponent, data: { title: 'grafical'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account settings'} },
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas'} },
      {path: 'rxjs', component: RxjsComponent, data: { title: 'RXJS'} },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
