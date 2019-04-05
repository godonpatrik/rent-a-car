import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { AuthGuard } from './auth.guard';
import { CarEditComponent } from './edit-car/edit-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { DetailsPersonComponent } from './details-person/details-person.component';

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
    component: EditPersonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cars/:id',
    component: DetailsCarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'persons/:id',
    component: DetailsPersonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'persons/:id/edit',
    component: EditPersonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cars/:id/edit',
    component: CarEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path:'listPersons',
    component:ListPersonComponent,
    canActivate :[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
