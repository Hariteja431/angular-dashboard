import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl="assets/employee.json";                                            
  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return  this.http.get<any[]>(`${this.baseurl}`)
  }
  getbyemail(email:string):Observable<any[]>{
    return  this.http.get<any[]>(`${this.baseurl}/searchbyemail?=${email}`)
  }
  adduser(record:StudentService):Observable<any[]>{
    return this.http.post<any[]>(this.baseurl,{data:record})
  }
  deleteuser(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseurl}/id?=${id}`)
  }
  updateuser(id:number,record:StudentService):Observable<any[]>{
    return this.http.put<any[]>(`${this.baseurl}/id?=${id}`,{data:record})
  }
} 