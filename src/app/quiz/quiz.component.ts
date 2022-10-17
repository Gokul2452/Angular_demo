import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  performance_messages = ["Need to work more", "Not bad", "Good Score"];
   grade_msg : string = '';
  q1_answer:string ='';
  q2_answer:string ='';
  quiz_result:number = 0;

  quizSubmit(){
  if(this.q1_answer == 'Gokul'){
  this.quiz_result = this.quiz_result + 1;
 }

  if(this.q2_answer == 'Both'){
  this.quiz_result = this.quiz_result + 1;
 
 }
 this.grade_msg = this.performance_messages[this.quiz_result];
   }
  


  q1(event:any){
    this.q1_answer = event.target.value;
    console.log(event.target.value);
  }
  q2(event:any){
    this.q2_answer = event.target.value;

  }
  reload(){
    location.reload();
  
  }
  }

  
