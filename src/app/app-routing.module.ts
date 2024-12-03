import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EroorPageComponent } from './eroor-page/eroor-page.component';

const routes: Routes = [
  {
    path:'',component:StudentDashboardComponent
  },
  {
    path:'**',component:EroorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
