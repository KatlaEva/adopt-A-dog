import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DogService } from '../../services/dog.service'
import { Router } from '@angular/router';


import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {
  dog: Dog = {
    dogName: '',
    race: '',
    dogAge: 0,
    dogOwner: '',
    dogInfo: '',
    dogId: ''
  }

  //Get access to the dogForm
  @ViewChild('dogForm', {static: false}) form;

  constructor(
    private flashMessage: FlashMessagesService,
    private dogService: DogService,
    private router: Router
    ){}

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Dog, valid: boolean}) {
    if(!valid) {
      //Show error message
      this.flashMessage.show('Pleas fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else{
      //Add new dog
      this.dogService.newDog(value);

      //Show message
      this.flashMessage.show('New dog added', {
        cssClass: 'alert-success', timeout: 4000
      });
      
      //Redirect to dashboard
      this.router.navigate(['/']);
    }
  }
}

