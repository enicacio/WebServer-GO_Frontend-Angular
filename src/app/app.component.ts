import { ContatoService } from './contato.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hello-word';
  
  users: Array<any> = [];
  
  constructor(private service : ContatoService) {

    this.service.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
  }

}
