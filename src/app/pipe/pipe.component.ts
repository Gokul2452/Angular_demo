import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';



@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  today = new Date();
  num = 26.89;
  indian_rupee = 4500;

  List = [22,3,4,546576,77,6769]

  ex_object = {name:'gokul',age:21}

  person : {name:string,age:number}[] = [{name:'gokul',age:21}]

  map = {'Good':'100 Mark','poor':'20 Mark','others':'Fail'}

  time = new Observable<string>((Observer:Subscriber<string>)=>
  {
    setInterval(()=>Observer.next(new Date().toString()),1000);
  });

}
