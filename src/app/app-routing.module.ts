import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from "./administrator/administrator.component";
import { TripsComponent } from "./trips/trips.component";
import { LastMinuteComponent } from "./last-minute/last-minute.component";
import { ContinentsComponent } from "./continents/continents.component";
import { TripFormComponent } from './trip-form/trip-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'admin', component: AdministratorComponent },
  { path: 'trips', component: TripsComponent},
  { path: 'lastMinute', component: LastMinuteComponent},
  { path: 'showContinents', component: ContinentsComponent},
  { path: 'tripForm', component: TripFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
