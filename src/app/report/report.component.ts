import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { constant } from '../app.constant';
import { Subscription } from 'rxjs';
import { ApiService } from '../utils/services/api.service';

declare var google: any, FB: any;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private dataService: DataService, private apiService: ApiService) { }
  correctAnswers: [string, number][] = [];
  subscription: Subscription[] = [];
  ngOnInit() {
    const sub = this.dataService.getQuestionanswers.subscribe(response => {
      console.log('efef', response);
      ['Magnetism', 'Electricity', 'Physics'].forEach(value => {
        const filteredData = response.filter((r, i) => r.ans && r.section === value && r.ans === constant.ANSWERS[i]);
        this.correctAnswers.push([value, filteredData.length]);
      });
      this.googleChartInit(this.correctAnswers);
    });
    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    })
  }

  googleChartInit(paramData): void {

    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Section');
      data.addColumn('number', 'Correct Answers');
      // data.addColumn('number', 'Physics');
      // data.addColumn('string', 'Pizza topping');
      // data.addColumn('number', 'Slices');
      console.log(paramData);
      data.addRows(paramData);

      // Set chart options
      var options = {
        'title': 'Correct Answers in Physics, Electricity, Magnetism',
        'width': 400,
        'height': 300
      };

      // var chart_div = document.getElementById('chart_div');
      // var chart = new google.visualization.ColumnChart(chart_div);

      // // Wait for the chart to finish drawing before calling the getImageURI() method.
      // google.visualization.events.addListener(chart, 'ready', function () {
      //   const fbHref = '//www.facebook.com/sharer/sharer.php?u=' + chart.getImageURI();
      //   chart_div.innerHTML = "<a target='_blank' onclick='return !window.open(this.href, \"Facebook\", \"width=640,height=300\")' href='" + fbHref + "'>  <img src='" + chart.getImageURI() + "'> </a>";
      //   console.log(chart_div.innerHTML);
      // });

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  }

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  }

  shareOnFacebook(): void {
    var cv = document.querySelectorAll('svg')[0];
    var svg = new XMLSerializer().serializeToString(cv);
    const data = 'data:image/svg+xml;base64, ' + window.btoa(svg);
    const encodedDataUri = encodeURIComponent(data);
    let blob;
    try {
      blob = this.dataURItoBlob(data);
    } catch (e) {
      console.log(e);
    }
    FB.getLoginStatus((response) => {
      console.log(response);
      if (response.status === "connected") {
        this.postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
      } else if (response.status === "not_authorized") {
        FB.login(function (response) {
          this.postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
        }, { scope: "publish_actions" });
      } else {
        FB.login(function (response) {
          this.postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
        }, { scope: "publish_actions" });
      }
    });
  }

  postImageToFacebook(token, filename, mimeType, imageData, message) {
    var fd: any = new FormData();
    fd.append("access_token", token);
    fd.append("source", imageData);
    fd.append("no_story", true);

    this.apiService.sendFormDataToFacebook(token, fd)
      .subscribe(response => {
        console.log('Sent form data', response);
      });
    // Upload image to facebook without story(post to feed)
    // $.ajax({
    //     url: "https://graph.facebook.com/me/photos?access_token=" + token,
    //     type: "POST",
    //     data: fd,
    //     processData: false,
    //     contentType: false,
    //     cache: false,
    //     success: function (data) {
    //         console.log("success: ", data);

    //         // Get image source url
    //         FB.api(
    //             "/" + data.id + "?fields=images",
    //             function (response) {
    //                 if (response && !response.error) {
    //                     //console.log(response.images[0].source);

    //                     // Create facebook post using image
    //                     FB.api(
    //                         "/me/feed",
    //                         "POST",
    //                         {
    //                             "message": "",
    //                             "picture": response.images[0].source,
    //                             "link": window.location.href,
    //                             "name": 'Look at the cute panda!',
    //                             "description": message,
    //                             "privacy": {
    //                                 value: 'SELF'
    //                             }
    //                         },
    //                         function (response) {
    //                             if (response && !response.error) {
    //                                 /* handle the result */
    //                                 console.log("Posted story to facebook");
    //                                 console.log(response);
    //                             }
    //                         }
    //                     );
    //                 }
    //             }
    //         );
    //     },
    //     error: function (shr, status, data) {
    //         console.log("error " + data + " Status " + shr.status);
    //     },
    //     complete: function (data) {
    //         //console.log('Post to facebook Complete');
    //     }
    // });
  }

}
