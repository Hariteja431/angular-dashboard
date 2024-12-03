import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  records:Student[]=[];
  constructor(private service:StudentService){}
  ngOnInit():void{
    this.getall();
  }
  getall():void{
    this. service.getall().subscribe(data=>this.records=data);

  }


}
