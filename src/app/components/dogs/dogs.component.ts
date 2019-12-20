import { DogService } from './../../services/dog.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as DogActions from '../actions/dog.actions'

import { Dog } from '../../models/Dog';
import { DogLike } from './../../models/DogLike';

interface AppState {
  adog: DogLike;
}


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {
  dogs: Dog[];
  faCoffee = faCoffee;
  adog: Observable<DogLike>
  

  constructor(
    private dogService: DogService,
    private store: Store<AppState>) {
    this.adog = this.store.select('adog');
    }

  ngOnInit() {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
    }   

  isInterested() {
    console.log('interested tapped')
    this.store.dispatch(new DogActions.Interested())    
  }

  notInterested() {
    console.log('NOTinterested tapped')
    this.store.dispatch(new DogActions.Notinterested())    
  }

  resetPost() {
    console.log('Reset works!')
    this.store.dispatch(new DogActions.Reset())
  }



}
