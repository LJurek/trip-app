import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { LastMinuteComponent } from './last-minute/last-minute.component';
import { ContactComponent } from './contact/contact.component';
import { PurchasComponent } from './purchas/purchas.component';
import { HttpClientModule } from '@angular/common/http';
import { ContinentsComponent } from './continents/continents.component';
import { TripFormComponent } from './trip-form/trip-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    AdministratorComponent,
    MenuComponent,
    LastMinuteComponent,
    ContactComponent,
    PurchasComponent,
    ContinentsComponent,
    TripFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
