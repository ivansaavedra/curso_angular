import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RestringirAccesosService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    localStorage.setItem('token','true');

    if(localStorage.getItem('token') != 'true'){
      Swal.fire({
        title: 'Acceso restringido!',
        text: 'No cuentas con los permisos para acceder a la página!',
        icon: 'error',
      })

      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
