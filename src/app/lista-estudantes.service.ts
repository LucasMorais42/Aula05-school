import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class ListaEstudantesService {

  private apiUrl = "http://localhost:3000/students";

  constructor(private http:HttpClient) { }
  
  //O método getStudents irá pegar um Observável (resposta da API), irá pegar um tipo array de Estudantes
  getStudents():Observable<Student[]>{
    //retorna uma resposta da API, pega os elementos da API e retorna em um array do tipo Estudantes
    return this.http.get<Student[]>(this.apiUrl)
  }
}
