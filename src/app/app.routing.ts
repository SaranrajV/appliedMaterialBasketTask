import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponentComponent } from './login-module/login-component/login-component.component';
import { HomeComponent } from './home/home/home.component'
import { AuthGuard } from 'gaurds/auth.gaurd';


@NgModule({
  imports: [
    RouterModule.forRoot([
       { 
        path: 'login', 
        component: LoginComponentComponent,
      },
      { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  exports : [
    RouterModule
  ]
})
export class AppRouting {

}