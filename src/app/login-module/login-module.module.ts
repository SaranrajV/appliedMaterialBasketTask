import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';

import { 
 
  MatButtonModule,
  MatInputModule,
  MatCardModule,
MatSnackBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [ 
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    modules,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [LoginComponentComponent]
})
export class LoginModuleModule { }
