import { Component, OnInit } from '@angular/core';
import { ApiService } from '../utils/services/api.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  questions: string[] = [];

  ngOnInit() {
    this.getQuestionFile();
  }

  getQuestionFile(): void {
    this.apiService.getQuestionFile()
      .subscribe((response: string) => {
        console.log('File data', response);
        this.questions = response.trim().split('\n');
      });
  }

}
