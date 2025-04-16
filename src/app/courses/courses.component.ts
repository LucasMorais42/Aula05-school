import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../courses-service';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit{
  formGroupCourse: FormGroup;
  courses: Course[]=[];
  
  constructor(private service:CoursesService, private formBuilder: FormBuilder){

    this.formGroupCourse=formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      active: [''],
      promotion: ['']
    })

    ngOnInit():void{
      //como a API é um OBSERVABLE, aqui tem que ser um SUBSCRIBE!
      this.service.getCourses().subscribe({
        //next significa que deu certo com a API, nesse caso os dados da API (json) são atribuidos a lista students
        next: json => this.courses=json
    })
  }

    save(){
      this.service.saveCourses(this.formGroupCourse.value).subscribe({
        next: json =>{
          this.courses.push(json);
          this.formGroupCourse.reset();
        }
      })
    }
  }
}


