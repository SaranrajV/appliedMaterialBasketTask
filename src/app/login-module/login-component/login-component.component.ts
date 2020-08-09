import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { AuthService } from 'services/auth.service';
import { Router } from '@angular/router';
import { AuthModel } from 'model/auth-model';
import { CommonService } from 'services/common.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  @Input() error: string | null;
  constructor(private authService:AuthService,
    private route:Router,
    private common:CommonService) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      let userData:any = this.authService.validateUserData(this.form.value);
      if(userData){
        this.authService.persistLoggedUserData(userData);
        this.route.navigate(["home"]);
      }else this.common.showToaster("Invalid Credentials..");
    }else{
      this.common.showToaster("Invalid Credentials..");
    }
  }
}
