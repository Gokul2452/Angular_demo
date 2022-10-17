import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Excerise1Component } from './excerise1/excerise1.component';
import { Excerise2Component } from './excerise2/excerise2.component';
import { Excerise3Component } from './excerise3/excerise3.component';
import { Excerise4Component } from './excerise4/excerise4.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserDetComponent } from './user-det/user-det.component';
import { RevpipePipe } from './revpipe.pipe';
import { QuizComponent } from './quiz/quiz.component';
import { PipeComponent } from './pipe/pipe.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    Excerise1Component,
    Excerise2Component,
    Excerise3Component,
    Excerise4Component,
    LoginComponent,
    UserComponent,
    UserDetComponent,
    RevpipePipe,
    QuizComponent,
    PipeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
