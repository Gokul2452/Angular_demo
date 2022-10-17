import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() msgfromparent :string = " ";
@Input() persons : any ;

msgfrom : string = 'Hi parent';

search:string = '';
@Output() Sendtoparent : EventEmitter  <string> = new EventEmitter();
@Output() randomtoparent :EventEmitter <number> = new EventEmitter();

sendToParent(){ 
  this.Sendtoparent.emit(this.msgfrom);
 }
result :number  = 0;

random(){
  this.result = Math.random() * 500 ;
  this.result = Math.round(this.result);
  this.randomtoparent.emit(this.result);
  console.log(this.result)
}
gender_Event : string ='';

eventCheck(event:any){
this.gender_Event = event.target.value;
console.log(this.gender_Event)

}
}
