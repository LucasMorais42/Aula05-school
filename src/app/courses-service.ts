import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = "http://localhost:3000/courses";
  constructor(private http:HttpClient) { }
  
  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl)
  }

  saveCourses(course: Course):Observable<Course>{
    return this.http.post<Course>(this.apiUrl, course);
  }
}
