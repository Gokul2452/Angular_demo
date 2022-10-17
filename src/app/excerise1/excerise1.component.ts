import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-excerise1',
  templateUrl: './excerise1.component.html',
  styleUrls: ['./excerise1.component.css']
})
export class Excerise1Component implements OnInit {

  constructor() { }

msg_sendtoex2  = 'Message from parent';
msg_2 = "hii";
s :string = '';
@Input() sendtochild : EventEmitter<string> = new EventEmitter();
send(){
this.sendtochild.emit(this.s);
}
  ngOnInit(): void {
  }
  align = 'center';


  stud_obj:student[]=[{stud_name:'Gokul',stud_age:21,stud_rollno:'21PA15'},
{
  stud_name:'VENKAT',stud_rollno:'21PA16',stud_age:23
}]

 student:{name:string,rollno:string,class:string,ph_no:number}[]=[
  {name:'Gokul',rollno:'21PA15',class:'I MCA',ph_no:90899009},
  {name:'Venkat',rollno:'21PA17',class:'II MCA',ph_no:908994400},
  {name:'Ram',rollno:'21PA12',class:'I MCA',ph_no:7899089900}

]
result:any = '';
search_Val:any ='';
search()
{

  this.result = this.student.findIndex(x=> x.name == this.search_Val || x.class==this.search_Val || x.ph_no == this.search_Val || x.rollno == this.search_Val)
  if(this.result >= 0 )
  {
    alert("Value found")
    console.log("Name :",this.student[this.result].name);
    console.log("class :",this.student[this.result].class);
    console.log("Rollno :",this.student[this.result].rollno);

    console.log("Ph-no :",this.student[this.result].ph_no);




  }
  else{
    alert("value not found");

  }
  console.log(" ")
  console.table(this.stud_obj);
}
}

interface student{
  stud_name:string,
  stud_rollno:string,
  stud_age:number
}
