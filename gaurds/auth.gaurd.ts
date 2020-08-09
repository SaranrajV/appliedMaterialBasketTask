import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "services/auth.service";
import { CommonService } from "services/common.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router:Router,
    private common:CommonService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userData = this.authService.getLoggedInUserData();
    if(userData){
        return true;
    }else{
        this.router.navigate(["/login"]);
        return false;
    }
  }
}
