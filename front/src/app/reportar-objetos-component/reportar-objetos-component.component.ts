import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

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
  imageBase64 =  new FormControl('', [Validators.required]);

  reportarForm = this.formBuilder.group({
    campus: new FormControl(),
    location: new FormControl(),
    category: new FormControl(),
    comments: new FormControl(),
    imageBase64: new FormControl(),
  });

  onChange($event: any) {
    let file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
   };
 }

  onFormSubmit(): void {
    let currentDate = new Date();
    let valuesToSend = {
      ...this.reportarForm.value,
      //imageBase64: ' ', //TODO: SAVE UPLOADED IMAGE STRING
      status: 'active',
      dateFound: currentDate.toISOString().split('T')[0],
    };
    console.log(valuesToSend);
    try {
      axios
        .post('http://localhost:3000/api/objects/create', valuesToSend)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {}
}
