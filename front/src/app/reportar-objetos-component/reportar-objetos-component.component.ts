import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reportar-objetos-component',
  templateUrl: './reportar-objetos-component.component.html',
  styleUrls: ['./reportar-objetos-component.component.css']
})
export class ReportarObjetosComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  reportarForm = this.formBuilder.group({
    campus:[''],
    ubicacion:[''],
    categoria:[''],
    comentarios:['']

  })

  ngOnInit(): void {
  }

}
