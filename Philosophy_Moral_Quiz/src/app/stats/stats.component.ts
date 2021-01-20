import { Component, OnInit } from '@angular/core';

import { MoralsService } from '../shared/morals.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  morals: any[] = [];
  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [{data: [], label: 'Votes'}];
  chartColors: any[] = [{backgroundColor:[] }];

  constructor(public moralsService: MoralsService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  ngOnInit(): void {
    this.getMorals();
    
  }

  getMorals(){
    this.moralsService.getMorals().subscribe( (morals:any[]) => {
      this.morals = morals;
      this.morals.sort((moralA, moralB)=>{
          return moralB.payload.doc.data().vote - moralA.payload.doc.data().vote;
       });
      this.barChartLabels = [];
      this.barChartData = [{data:[], label:"Votes"}];
      this.morals.forEach((moral:any)=>{
        this.barChartLabels.push(moral.payload.doc.data().moral);
        this.barChartData[0].data.push(moral.payload.doc.data().vote);
        this.chartColors[0].backgroundColor.push("#023E8A");
      });
    });
  }

}
