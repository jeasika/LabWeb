import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this.formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }
  email = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar una categoria';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
