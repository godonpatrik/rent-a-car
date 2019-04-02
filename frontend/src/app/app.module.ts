import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatCheckboxModule, MatDatepicker, MatDatepickerModule, DateAdapter, MatNativeDateModule, MatMenuModule } from '@angular/material'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './add-person/add-person.component';
import { CarEditComponent } from './edit-car/edit-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { DetailsPersonComponent } from './details-person/details-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AddCarComponent,
    AddRentComponent,
    AddPersonComponent,
    CarEditComponent,
    ListCarComponent,
    DetailsCarComponent,
    EditPersonComponent,
    ListPersonComponent,
    DetailsPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
