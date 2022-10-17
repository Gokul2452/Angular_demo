import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excerise3',
  templateUrl: './excerise3.component.html',
  styleUrls: ['./excerise3.component.css']
})
export class Excerise3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center = 'center';
  student:{name:string,rollno:string,mark1:number,mark2:number,mark3:number,total:number}[]=[
    {name:'Gokul',rollno:'21PA15',mark1:90,mark2:86,mark3:62,total:220},
    {name:'Power',rollno:'21PA18',mark1:87,mark2:41,mark3:90,total:285},
    {name:'Prakesh',rollno:'21PA16',mark1:76,mark2:100,mark3:80,total:275},
    {name:'kolhi',rollno:'21PA16',mark1:95,mark2:45,mark3:50,total:190},
    {name:'hathi',rollno:'21PA16',mark1:87,mark2:41,mark3:90,total:295},
   ]
}
