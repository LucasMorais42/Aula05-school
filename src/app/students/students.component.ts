import { Component, OnInit } from '@angular/core';
import { ListaEstudantesService } from '../lista-estudantes.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

//O implements OnInit significa asssim que o componente for implementado, eu irei capturar o momento
//de inicialização com o OnInit, nesse método OnInit eu posso fazer algo
//é tipo, "quando o component for inicializado, irei fazer algo usando o método OnInit (que pega essa inicialização"
export class StudentsComponent implements OnInit {

  //array que salvará os dados da API em um array do tipo Student.
  students: Student[]=[];

  //injeta o serviço aqui, no caso é como se eu fosse obrigar a usar o serviço ListaEstudantesService,
  //e salvo essse serviço numa variável chamada listaEstudantes
  constructor(private listaEstudantes:ListaEstudantesService){}

  //função que faz algo na hora que é inicializado o componente
  ngOnInit():void{
    //como a API é um OBSERVABLE, aqui tem que ser um SUBSCRIBE!
    this.listaEstudantes.getStudents().subscribe({
      //next significa que deu certo com a API, nesse caso os dados da API (json) são atribuidos a lista students
      next: json => this.students=json
  })

}}
