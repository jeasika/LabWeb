import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-objetos-perdidos-component',
  templateUrl: './objetos-perdidos-component.component.html',
  styleUrls: ['./objetos-perdidos-component.component.css'],
})
export class ObjetosPerdidosComponentComponent implements OnInit {
  totalAngularPackages: any = [];
  constructor(private http: HttpClient) {}
  async ngOnInit(): Promise<void> {
    let res = await axios
      .get('http://localhost:3000/api/objects/list', {
        withCredentials: true,
      })
      console.log(res.data);
      this.totalAngularPackages = await res.data;
  }
  click : boolean = false;

  onButtonClick(){
    this.click = !this.click;
}

}
