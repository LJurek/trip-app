import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  public continentsList = [];
  id: number = 0;
  name: String ='';

  ngOnInit() {

  this.getContinents();
  }

  getContinents(): void  {
    this.http.get<Continents[]>("http://localhost:8080/continent").subscribe(data => { 
    console.log(data);
    this.continentsList = data;
    })
  }

}
