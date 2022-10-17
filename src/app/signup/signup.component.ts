import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
 disabled:boolean|undefined;
  ngOnInit(): void {
  }
  submit(){
    window.alert("Welcome User 🤝")
  }

}
