import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSkiptestService {

  constructor(private http:HttpClient) { }

  getTrendingGifs(){
    return this.http.get('')
  }
}
