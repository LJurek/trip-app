import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private urlGetContin = 'http://localhost:8080/continent';
  private urlSaveContin = 'http://localhost:8080/addContinent';
  private urldeleteContin = 'http://localhost:8080/deleteContinent/';
  public continentsList = [];

  ngOnInit() {
  this.getContinents();
  }

  getContinents(): void  {
    this.http.get<Continents[]>(this.urlGetContin).subscribe(data => {
    console.log(data);
    this.continentsList = data;
    });
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.http.post<Continents[]>(this.urlSaveContin, {name}).subscribe(data => {
      console.log(data);
        this.continentsList.push(data);
      });
  }
  deleteCont(id: string ): void {
    this.http.delete<Continents[]>(this.urldeleteContin + id).subscribe( () => {
    this.getContinents();
    });
      }
    }
