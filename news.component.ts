/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/


import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';



import { Articles, initialArticles } from './article.model';



@Component({

  selector: 'app-news',

  templateUrl: './news.component.html',

  styleUrls: ['./news.component.css']

})

export class NewsComponent implements OnInit {

  data: any[];

  articles: Articles = initialArticles;

 

  //inject ApiService dependency

  constructor(private apiService:ApiService) {

    //Property 'data' has no initializer and is not definitely assigned in the constructor

    this.data = [];

  }



  ngOnInit(): void {

    this.apiService.getNews().subscribe((resp: any)=>{

      console.log(resp);

      this.data = resp['articles'];

         

    });

  }

     

}
