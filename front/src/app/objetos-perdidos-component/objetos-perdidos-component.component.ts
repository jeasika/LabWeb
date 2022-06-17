import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-objetos-perdidos-component',
  templateUrl: './objetos-perdidos-component.component.html',
  styleUrls: ['./objetos-perdidos-component.component.css'],
})
export class ObjetosPerdidosComponentComponent implements OnInit {
  private totalAngularPackages: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    axios
      .get('http://localhost:3000/api/objects/list', {
        withCredentials: true,
      })
      .then((res) => {
        this.totalAngularPackages = { ...res.data };
        console.log(this.totalAngularPackages);
      });
  }
  public get(url:string){
    return this.http.get(url);
  }
}
