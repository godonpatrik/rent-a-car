import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AuthGuard } from './auth.guard';
import { CarEditComponent } from './edit-car/edit-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'addCar',
    component: CarEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addRent',
    component: AddRentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listCars',
    component: ListCarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addPerson',
    component: AddPersonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cars/:id',
    component: DetailsCarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cars/:id/edit',
    component: CarEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
