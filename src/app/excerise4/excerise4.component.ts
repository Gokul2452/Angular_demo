import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excerise4',
  templateUrl: './excerise4.component.html',
  styleUrls: ['./excerise4.component.css']
})
export class Excerise4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
timetable:{day:string,period_1:string,period_2:string,period_3:string,period_4:string,period_5:string}[] = [
  {day:'Monday',period_1:'Angular',period_2:'Bigdata',period_3:'Spm',period_4:'Ml',period_5:'Iot'},
  {day:'Tuesday',period_1:'Bigdata',period_2:'Angular',period_3:'Ml',period_4:'Iot',period_5:'Spm'},
  {day:'Wedesday',period_1:'Angular',period_2:'Spm',period_3:'Iot',period_4:'Ml',period_5:'Bigdata'},
  {day:'Thrusday',period_1:'Spm',period_2:'Ml',period_3:'Spm',period_4:'Angular',period_5:'Iot'},
  {day:'Friday',period_1:'Iot',period_2:'Bigdata',period_3:'Angular',period_4:'Ml',period_5:'Spm'}
]
}
