import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reportar-objetos-component',
  templateUrl: './reportar-objetos-component.component.html',
  styleUrls: ['./reportar-objetos-component.component.css']
})

export class ReportarObjetosComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  campus = new FormControl('', Validators.required);
  categoria = new FormControl('', [Validators.required]);

  reportarForm = this.formBuilder.group({
    campus: new FormControl(),
    categoria: new FormControl(),
    comentarios: new FormControl(),
  })

  onFormSubmit(): void {
    console.log(this.reportarForm.value);
  } 

  ngOnInit(): void {}


  /*constructor(private formBuilder: FormBuilder){}

  reportarForm = this.formBuilder.group({
    campus:[''],
    ubicacion:[''],
    categoria:[''],
    comentarios:['']

  })*/
  
}
