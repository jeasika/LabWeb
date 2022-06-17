import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objetos-perdidos-component',
  templateUrl: './objetos-perdidos-component.component.html',
  styleUrls: ['./objetos-perdidos-component.component.css'],
})
export class ObjetosPerdidosComponentComponent implements OnInit {
  private totalAngularPackages: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:8000/api/objects/list', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe((data) => {
        console.log(data);
        this.totalAngularPackages = data;
      });
  }
}
