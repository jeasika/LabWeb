import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reportar-objetos-component',
  templateUrl: './reportar-objetos-component.component.html',
  styleUrls: ['./reportar-objetos-component.component.css'],
})
export class ReportarObjetosComponentComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  campus = new FormControl('', Validators.required);
  category = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);

  reportarForm = this.formBuilder.group({
    campus: new FormControl(),
    location: new FormControl(),
    category: new FormControl(),
    comments: new FormControl(),
  });

  onFormSubmit(): void {
    let currentDate = new Date();
    let valuesToSend = {
      ...this.reportarForm.value,
      imageBase64: ' ', //TODO: SAVE UPLOADED IMAGE STRING
      status: 'active',
      dateFound: currentDate.toISOString().split('T')[0],
    };
    console.log(valuesToSend);
    try {
      this.http
        .post<any>('http://localhost:3000/api/objects/create', valuesToSend)
        .subscribe((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {}

  /*constructor(private formBuilder: FormBuilder){}

  reportarForm = this.formBuilder.group({
    campus:[''],
    ubicacion:[''],
    category:[''],
    comentarios:['']

  })*/
}
