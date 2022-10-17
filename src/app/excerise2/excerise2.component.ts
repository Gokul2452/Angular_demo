import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-excerise2',
  templateUrl: './excerise2.component.html',
  styleUrls: ['./excerise2.component.css']
})
export class Excerise2Component implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }
  search:String='';
  // @Input() second_msg :string ='';
  
  
  persons : {name:string,age:number,sex:string} [] = [
    { name:'Gokul'  , age:22, sex:'Male'  },
    { name:'Prakash', age:25, sex:'Male'  },
    { name:'Girl'   , age:25, sex:'Female'},
    { name:'Hathi'  , age:22, sex:'Male'  },
    { name:'Panda'  , age:20, sex:'Female'}
    ]
  align = 'center';
  search_menu:number = 0; 
  onSumbit(myForm: NgForm){
    console.log(myForm.value);
    console.log(myForm.valid);
      
  }
  
  setDefault(myForm: NgForm){
    myForm.resetForm({
      name: 'Hardik', 
      email: 'savanihd@gmail.com'
    })
  }
  
  resetFormValue(myForm: NgForm){
    myForm.resetForm()
  }
  
}
