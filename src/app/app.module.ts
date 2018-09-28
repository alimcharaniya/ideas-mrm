import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { NewMemberComponent } from './components/new-member/new-member.component';
import { ExistingMemberComponent } from './components/existing-member/existing-member.component';







@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewMemberComponent,
    ExistingMemberComponent
  ],
  imports: [
    BrowserModule,
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
