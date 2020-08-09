import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModuleModule } from './login-module/login-module.module';
import { HomeModule } from './home/home.module'
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    LoginModuleModule,
    HomeModule,
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
