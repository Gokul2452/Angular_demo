import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Excerise1Component } from './excerise1/excerise1.component';
import { Excerise2Component } from './excerise2/excerise2.component';
import { Excerise3Component } from './excerise3/excerise3.component';
import { Excerise4Component } from './excerise4/excerise4.component';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetComponent } from './user-det/user-det.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'Ex_1',component:Excerise1Component
  },
  {
    path:'Ex_2',component:Excerise2Component
  },
  {
    path:'Ex_3',component:Excerise3Component
  },
  {
    path:'Ex_4',component:Excerise4Component
  },
  {
    path:'Login',component:LoginComponent
  },

  {
    path:'user_Det',component:UserDetComponent
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'quiz',component:QuizComponent
  },
  {
    path:'pipe',component:PipeComponent
  },
  {
    path:'signup',component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
