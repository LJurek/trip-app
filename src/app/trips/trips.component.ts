import { Component, OnInit } from '@angular/core';
import {Trip} from "../trip";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trip: Trip;
  name = 'New Name';

  constructor() { }

  ngOnInit() {
    this.trip = new Trip();
this.trip.name = 'Grecja Twoich marzeń';
this.trip.price = 1000;
  }

}
