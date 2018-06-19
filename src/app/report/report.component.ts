import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { constant } from '../app.constant';
import { Subscription } from 'rxjs';

declare var google: any;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private dataService: DataService) { }
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

      var chart_div = document.getElementById('chart_div');
      var chart = new google.visualization.ColumnChart(chart_div);

      // Wait for the chart to finish drawing before calling the getImageURI() method.
      google.visualization.events.addListener(chart, 'ready', function () {
        const fbHref = '//www.facebook.com/sharer/sharer.php?u=' + chart.getImageURI();
        chart_div.innerHTML = "<a target='_blank' onclick='return !window.open(this.href, \"Facebook\", \"width=640,height=300\")' href='" + fbHref + "'>  <img src='" + chart.getImageURI() + "'> </a>";
        console.log(chart_div.innerHTML);
      });

      chart.draw(data, options);
    }
  }

}
