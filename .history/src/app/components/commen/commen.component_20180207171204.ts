import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as G2 from '@antv/g2';
import * as $ from 'jquery';

@Component({
  selector: 'app-commen',
  templateUrl: './commen.component.html',
  styleUrls: ['./commen.component.scss, ./../../../../assets/style/animate.scss']
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

  data1 = [
    { year: '2001', population: 41.8 },
    { year: '2002', population: 38 },
    { year: '2003', population: 33.7 },
    { year: '2004', population: 30.7 },
    { year: '2005', population: 25.8 },
    { year: '2006', population: 31.7 },
    { year: '2007', population: 33 },
    { year: '2008', population: 46 },
    { year: '2009', population: 38.3 },
    { year: '2010', population: 28 },
    { year: '2011', population: 42.5 },
    { year: '2012', population: 30.3 }
  ];

  constructor() {

  }
  ngOnInit() {
    $('title').animateCss('bounce');
    G2.Global.setTheme('dark');
  }
  ngAfterViewInit() {
    this.chartShow();
    this.NightingaleRoseChart();
  }
  // 南丁格尔玫瑰图
  NightingaleRoseChart() {
    const chart = new G2.Chart({
      container: 'mountNode',
      forceFit: true,
      height: window.innerHeight
    });
    chart.source(this.data1);
    chart.coord('polar');
    chart.legend({
      position: 'right',
      offsetY: -window.innerHeight / 2 + 180,
      offsetX: -140
    });
    chart.axis(false);
    chart.interval().position('year*population')
      .color('year', G2.Global.colors_pie_16)
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    chart.render();
  }
  // 柱状图
  chartShow() {
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
