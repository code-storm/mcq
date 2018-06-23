import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { FacebookUser } from '../login/facebook.user';

declare var FB: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Output() finish = new EventEmitter();
  @Output() logout = new EventEmitter();
  profilePicture: string;
  ngOnInit() {
    this.getUserDetail();
  }

  onFinish(event: MouseEvent): void {
    this.finish.emit();
  }

  onLogOut(event: MouseEvent): void {
    this.logout.emit();
  }

  getUserDetail(): void {
    this.dataService.getFacebookUserDetails
      .subscribe((response: FacebookUser) => {
        if (response) {
          this.profilePicture = response.profilePicture;
        }
      });
  }

}
