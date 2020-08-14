import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarquesService {

  constructor(private http:HttpClient) { }

  acutowebUrl="http://localhost:8080/"

  getUrl(){

    return this.http.get(this.acutowebUrl);
  }
}
