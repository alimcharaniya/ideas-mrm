import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { NewMemberComponent } from './components/new-member/new-member.component';
import { ExistingMemberComponent } from './components/existing-member/existing-member.component';
import { FormsModule } from '@angular/forms';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewMemberComponent,
    ExistingMemberComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'new-member',
        component: NewMemberComponent
      },
      {
        path: 'existing-member',
        component: ExistingMemberComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,
    WelcomeComponent,
    NewMemberComponent,
    ExistingMemberComponent]
})
export class AppModule { }
