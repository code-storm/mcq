import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiService } from '../utils/services/api.service';
import { PopupService } from '../utils/services/popup.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {

  constructor(private apiService: ApiService,
    private popupService: PopupService,
    private dataService: DataService,
    private router: Router) { }

  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer;
  questions: string[] = [];
  radioSelected: any;
  interval: any;

  ngOnInit() {
    this.getQuestionFile();
    this.openStartTestPopup();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getQuestionFile(): void {
    this.apiService.getQuestionFile()
      .subscribe((response: string) => {
        console.log('File data', response);
        const splits = response.trim().split('\n');
        let allData = [];
        let fileIndex = 0;
        let obj: any = {};
        let section;
        splits.forEach(s => {
          s = s.trim();
          if (s === 'Electricity' || s === 'Physics' || s === 'Magnetism') {
            section = s;
            fileIndex = 0;
          } else {
            if (fileIndex % 2 === 0) {
              obj.quest = s;
            } else {
              obj.opts = s.split(' ');
              obj.section = section;
              this.questions.push(obj);
              obj = {};
            }
            ++fileIndex;
          }
        });
      });
  }

  openStartTestPopup(): void {
    const setting = {
      popupContainer: this.popupContainer,
      popupHeading: 'Start Test',
      popupBody: 'Press start to begin test',
      yesText: 'Start Test',
      popupBody2: null,
      yesFunction: this.startTest.bind(this)
    };
    this.popupService.openStartTestDialog(setting);
  }

  startTest(): void {
    const timerMinutes = 15 * 60 * 1000; // in millisec
    const countDownDate = new Date().getTime() + timerMinutes;
    this.interval = setInterval(() => {
      var now = new Date().getTime();

      const diff = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = this.padZero(minutes) + ":" + this.padZero(seconds);

      // If the count down is finished, write some text 
      if (diff < 0) {
        clearInterval(this.interval);
        document.getElementById("timer").innerHTML = "--:--";
        this.finishTest();
        console.info('Ending test');
      }
    })
  }

  finishTest(): void {
    const setting = {
      popupContainer: this.popupContainer,
      popupHeading: 'Your test is finished',
      popupBody: 'Press Get Report to see results',
      yesText: 'Get report',
      popupBody2: null,
      yesFunction: this.getReport.bind(this)
    };
    this.popupService.openStartTestDialog(setting);
    this.dataService.setQuestionsanswers(this.questions);
  }

  getReport(): void {
    this.router.navigateByUrl('generate-report');
  }

  private padZero = (n: number): string => {
    return n < 10 ? '0' + n : n.toString();
  }

}
