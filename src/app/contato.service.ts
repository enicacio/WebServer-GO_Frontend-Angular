import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})

export class ContatoService {

  private Uri : string = "http://localhost:3000/users"

  public selectedUser = null;
  public nextUserId = null;

  constructor(private http : HttpClient) { 

    this.getUsers().subscribe((data) => {

      this.nextUserId = (data[ data.length - 1].id + 1);
      console.log("Próximo id disponível " + this.nextUserId);

    });
  }

  public getUsers() {

    return this.http.get<Array<any>>(this.Uri);
  }
}
