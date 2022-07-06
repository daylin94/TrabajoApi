import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http:HttpClient) { }
  obtenerapi(){
    return this.http.get("")
  }
}
