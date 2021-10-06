import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceImagenService {
  get<T>(path: string) {
    throw new Error('Method not implemented.');
  }
  url ='https://jsonplaceholder.typicode.com/photos';
  constructor(private http:HttpClient) { }

  getImage(){
    return this.http.get(this.url);
  }
  getOnlyImg(id: string) {
      return this.http.get<Task>(id);
  }
}
