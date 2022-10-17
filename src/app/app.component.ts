import { Component } from '@angular/core';
import { window } from 'rxjs';
import { Router } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';
  align = 'center';
  bg ='assets/images/bg.jpg';
constructor(public router:Router){}
  bio_mark1:number = 0;
  bio_mark2:number = 0;
  bio_result:number |undefined;
  bio_name:string   = ''; 
  bio_class:string  = '';
  bio_office:string = '';
  bio_center:string = '';
  search_name:string ='';
 mumbai:string = 'mumbai';
  color:boolean = false;
  fathumbsup = faThumbsUp;
  fathumbsdown = faThumbsDown; 
  userobj:Iusers[] = [{
     
      user_name: 'Gokul',
      percentage: '90%',
      center: 'Public School'
    },
    {
     user_name: 'venkat',
     percentage: '95%',
     center: 'Madurai'
    },
   
  ];
  average(){
    this.bio_result=this.bio_mark1+this.bio_mark2 ;
     this.bio_result=this.bio_result/2;
   }
event:String = '';
   onkeypressEvent(event:any){
    
console.log(event.target.value)
this.event = event.target.value;
   }
// Ex-1 Finished

// Ex-2 started  
result:number=0;
go(){
  this.result = this.result + 1;
}
reset(){
  this.result= 0;
} 
// Ex-2 Finished

// Ex-3 started  
mobile_no:number=0;
check(){
if(this.mobile_no.toString().length == 10){
  alert("Mobile Entered Correct")
}
else{
  alert("Pls Enter Crt number")
}

}
status:boolean = true
change(){
  if(this.color == false) 
   this.color = true
   else
   this.color = false

   
  }
// Ex-3 ended  

// Ex-5 started

player:{
  player_name:string,
  runs:number
} ={
  player_name:"Gokul",
  runs:90
}
// user_name:string=" ";
// pass:string =" ";

navigation(){
 this.router.navigate(['child']);
 }

search_val:string = '';
search(){
  if(this.player.player_name.indexOf(this.search_val) == 0){
    alert("Value is found in object");
  }
  else{
    alert("Value not found in object");
  }
}

// Ex-5 Ended

// Ex-3 start
change_icon(){
  if(this.status == true)
  {
    this.fathumbsup = faThumbsDown;
    this.status = false;
  }
  else{
    this.fathumbsup = faThumbsUp;
    this.status = true
  }

}
// Ex-3 end
}

interface Iusers{
  user_name:string,
  percentage:string,
  center:string,
  // [key:number]:Iusers;
 
}