import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DogDetailsComponent} from './components/dog-details/dog-details.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard],},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dogs/add', component: AddDogComponent, canActivate:[AuthGuard]},
  {path: 'dogs/edit/:dogId', component: EditDogComponent, canActivate:[AuthGuard]},
  {path: 'dogs/:dogId', component: DogDetailsComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
  
];

@NgModule({
  providers: [AuthGuard],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
