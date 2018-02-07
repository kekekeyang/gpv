import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as G2 from '@antv/g2';

@Component({
  selector: 'app-commen',
  templateUrl: './commen.component.html',
  styleUrls: ['./commen.component.scss']
})
export class CommenComponent implements OnInit, AfterViewInit {
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
    G2.Global.setTheme('dark');

    this.chart = new G2.Chart({
      container: 'c1',
      width: 500,
      height: 500
    });
    this.chart.source(this.data);
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  }

}
