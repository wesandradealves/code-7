import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private mock = 'assets/mock/db.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      return data
    });  
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/mock/db.json");
  }
}
