import { UserService } from './services/user.service';
import { FilterDog } from './components/dogs/dog.filter';
import { DogService } from './services/dog.service';
import { PostService } from './services/post.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/Forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { dogReducer } from './redux/dog.reducer';
import { PostsComponent } from './components/posts/posts.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DogsComponent,
    SidebarComponent,
    AddDogComponent,
    EditDogComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UsersComponent,
    DogDetailsComponent,
    FilterDog,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'adopt-A-dog'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({adog: dogReducer }),
    FlashMessagesModule.forRoot()
  ],
  providers: [DogService, AuthService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
