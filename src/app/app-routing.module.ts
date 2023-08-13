import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'admin', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafical', component: GraficalComponent},
      {path: '', redirectTo: '/admin', pathMatch:'full'},
    ]
  },


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},


  {path: '**', component: NopagesfoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
