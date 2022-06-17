import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lost-and-found';
  user = undefined;
  async fetchUser(): Promise<any> {
    try {
      const res = await axios.get('http://localhost:3000/api/user/info', {
        withCredentials: true,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.fetchUser().then((res) => {
      console.log(res.data.user);
      if (res.data.user) this.user = { ...res.data.user };
    });
  }
}
