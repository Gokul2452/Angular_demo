import { MyserService } from './../myser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-det',
  templateUrl: './user-det.component.html',
  styleUrls: ['./user-det.component.css']
})
export class UserDetComponent implements OnInit {

constructor(public myservice: MyserService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 Msgtochild = 'Hi child';
 msgfromchild :string ='';
 random : number = 0 ;
 revnum  : number = 234;

 uname:string = '';
 uage:string = '';

 persons : {name:string,age:number,sex:string} [] = [
{ name:'Gokul'  , age:22, sex:'Male'  },
{ name:'Prakash', age:25, sex:'Male'  },
{ name:'Girl'   , age:25, sex:'Female'},
{ name:'Hathi'  , age:22, sex:'Male'  },
{ name:'Panda'  , age:20, sex:'Female'}
]

 recieve(event_msg:string){
   this.msgfromchild = event_msg;
  }

  recieveRandom(event_random:number){
  this.random = event_random;
  }

}
