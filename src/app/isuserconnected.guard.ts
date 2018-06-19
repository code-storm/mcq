import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataService } from './data.service';

declare var FB: any;
@Injectable()
export class IsuserconnectedGuard implements CanActivate {
  constructor(private dataService: DataService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkFbUser()
  }

  private checkFbUser(): Observable<boolean> {
    let k = this.dataService.getFacebookUserDetails.switchMap(response => {
      if (response) {
        return Observable.of(true);
      } else {
        this.router.navigateByUrl('login');
        return Observable.of(false);
      }
    });
    return k;
  }
}
