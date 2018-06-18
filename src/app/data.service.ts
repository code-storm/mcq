import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FacebookUser } from './login/facebook.user';

@Injectable()
export class DataService {

  constructor() { }
  private accessFacebookUserDetails = new BehaviorSubject(null);

  getFacebookUserDetails = this.accessFacebookUserDetails.asObservable();

  setFacebookUserDetails(userDetails: FacebookUser): void {
    this.accessFacebookUserDetails.next(userDetails);
  }

}
