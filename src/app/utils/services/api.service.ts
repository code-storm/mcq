import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURLs } from '../api.constant';
import { constant } from '../../app.constant';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  private fileId = '1lBuTBePC9uDaUDaeQSINXtukdQi1f2r3';

  getQuestionFile(): Observable<any> {
    return this.http.get(APIURLs.getGoogleDriveFile(this.fileId), { responseType: 'text', params: { key: constant.GOOGLE_API_ACCESS_TOKEN, alt: 'media' } });
  }

}
