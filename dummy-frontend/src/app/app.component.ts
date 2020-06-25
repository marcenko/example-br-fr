import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummy-frontend';
  text = '';
  showClass = true;

  constructor(private http: HttpClient) {
    this.http.get('/hello').subscribe(
      (data: Greeting) =>  {
        this.text = data.text;
      },
      error => {
        this.text = 'Error from backend';
      }
    );
  }

  doLogin() {
    this.http.get('/api/login').subscribe(
      (data: User) =>  {
        console.log(data);
      },
      error => {
        console.log('Error on login');
      }
    );
  }
}

export interface Greeting {
  text: string;
}

export interface User {
  name: string;
  email: string;
}
