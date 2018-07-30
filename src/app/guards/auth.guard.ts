import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ListaComponent } from '../lista/lista.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private lista : ListaComponent) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    if (this.lista.fichasArray.length > 0){
      return true;
    }

    this.router.navigate(['/home']);

    return false;
  }
}
