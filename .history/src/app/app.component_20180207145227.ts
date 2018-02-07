import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as G2 from '@antv/g2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 1150 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];
  chart: any;

  constructor() {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {

    this.chart = new G2.chart({
      container: 'c1',
      width: 500,
      height: 500
    });
    this.chart.source(this.data);
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  }


}
