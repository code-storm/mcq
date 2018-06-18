import { Component, OnInit } from '@angular/core';
import { FacebookUser } from './facebook.user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  private FB: any;

  ngOnInit() {

    (<any>window).fbAsyncInit = () => {
      FB.init({
        appId: '240875379640481',
        cookie: true,
        xfbml: true,
        version: 'v3.0'
      });

      FB.AppEvents.logPageView();

    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


  }

  getLoginStatus(): void {
    FB.getLoginStatus((response) => {
      if (response.status === "authorization_expired") {
        this.fbLogin();
      } else if (response.status === 'connected') {
        this.fbMe();
      }
      console.log(response);
    });
  }

  fbLogin(): void {
    FB.login(response => {
      console.log('login', response);
    }, { scope: 'email' });
  }

  fbMe(): void {
    FB.api('/me?fields=id,name,email,picture', (response) => {
      console.log(response);
      const fbUser = new FacebookUser(response.id, response.email, response.name, response.picture.data.url);
      this.dataService.setFacebookUserDetails(fbUser);
      this.router.navigateByUrl('online-test');
    });
  }

}
