import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import {HttpClientModule} from '@angular/common/http';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EroorPageComponent } from './eroor-page/eroor-page.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    EroorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
