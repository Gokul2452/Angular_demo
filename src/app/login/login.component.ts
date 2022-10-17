import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   rform  :FormGroup;
  constructor(public router:Router) { }


  ngOnInit(): void {
    this.rform = new FormGroup({
      user : new FormControl(null,Validators.minLength(6)),
      email  : new FormControl(null,Validators.pattern
        ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
      password : new FormControl(null),
      confirmpass  : new FormControl(null),
      Dob :  new FormControl(null),
      education : new FormControl(null),
      status: new FormControl(null),
      avatar: new FormControl(null),
      name: new FormControl('')

    })
}
  isvisible : boolean = false ;
  username:string ='';
  email   :string ='';
  password:string ='';
  confirmpass:string='';
  Dob:string='';
  edu:string='';
  stats:string='';
  picture:string='';
  imageURL: string;
  pic:string;

  reset(){
    location.reload();
  }
  onsubmit(){
  console.log(this.rform)
  alert("Value Stored 👍")
  this.isvisible = true
  this.username = this.rform.value.user;
  this.email    = this.rform.value.email;
  this.password = this.rform.value.confirmpass;
  this.Dob = this.rform.value.Dob;
  this.edu = this.rform.value.education;
  this.stats = this.rform.status;
  }
   showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.rform.patchValue({
      avatar: file
    });
    this.rform.get('avatar').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
