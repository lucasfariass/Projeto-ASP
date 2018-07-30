import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../services/geral/geral.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service : GeralService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    if (this.service.fichasArray.length > 0){
      return true;
    }

    this.router.navigate(['/home']);

    return false;
  }
}
