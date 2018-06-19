import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FacebookUser } from './login/facebook.user';

@Injectable()
export class DataService {

  constructor() { }
  private accessFacebookUserDetails = new BehaviorSubject(null);
  private accessQuestionanswers = new BehaviorSubject([]);

  getFacebookUserDetails = this.accessFacebookUserDetails.asObservable();
  getQuestionanswers = this.accessQuestionanswers.asObservable();

  setFacebookUserDetails(userDetails: FacebookUser): void {
    this.accessFacebookUserDetails.next(userDetails);
  }

  setQuestionsanswers(data): void {
    this.accessQuestionanswers.next(data);
  }

}
