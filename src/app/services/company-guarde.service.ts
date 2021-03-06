import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LogginService } from './loggin.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.logginService.type === 'Company'&& this.logginService.inLoggedIn){
    return true

    }
    this.router.navigate(['/login']);
    return false;
    
    

  }


  public constructor(private logginService : LogginService,private router : Router) {
    
   }
}
