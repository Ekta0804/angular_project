/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}*/



/*import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';



@Injectable({

  providedIn: 'root'

})

export class ApiService {



  constructor(private http: HttpClient) { }



}*/

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';



@Injectable({

  providedIn: 'root'

})

export class ApiService {

 

  API_KEY:string="79d05f8b6d444a6a84d32ecdac47efcb";



  //You can then inject the HttpClient service as a dependency of an application class

  constructor(private http: HttpClient) { }



  public getNews()

  {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=79d05f8b6d444a6a84d32ecdac47efcb');

  }



}