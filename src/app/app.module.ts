import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { DataService } from './data.service';
import { ApiService } from './utils/services/api.service';
import { PopupsComponent } from './popups/popups.component';
import { PopupService } from './utils/services/popup.service';
import { ReportComponent } from './report/report.component';
import { IsuserconnectedGuard } from './isuserconnected.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OnlineTestComponent,
    PopupsComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [DataService, ApiService, PopupService, IsuserconnectedGuard],
  entryComponents: [PopupsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
