import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';

declare var FB: any;
@Injectable()
export class IsuserconnectedGuard implements CanActivate {
  constructor(private dataService: DataService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkFbUser()
  }

  checkFbUser(): Observable<boolean> {
    return this.dataService.getFacebookUserDetails.map(response => {
      if (response) {
        return true;
      } else {
        return false;
      }
    });
    // return this.getLoginStatus();
    // (<any>window).fbAsyncInit = () => {
    //   FB.init({
    //     appId: '240875379640481',
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v3.0'
    //   });

    //   FB.AppEvents.logPageView();

    // };

    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));


  }

  getLoginStatus(): Observable<boolean> {
    if (typeof FB !== "undefined") {

      return FB.getLoginStatus((response) => {
        if (response.status === "authorization_expired") {
          return false;
        } else if (response.status === 'connected') {
          return true;
        }
        console.log('Guard', response);
      });
    } else {
      return Observable.of(false);
    }
  }
}
