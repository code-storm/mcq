import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {

  constructor() { }
  popupHeading: string = '';
  popupBody: string = '';
  popupBody2: string = '';
  _ref: any;
  closePopup: Function;
  yesFunction: Function;
  yesText: string = '';
  ngOnInit() {
  }

}
