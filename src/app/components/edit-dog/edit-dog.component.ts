import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DogService } from '../../services/dog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../../models/Dog';


@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit {
  dogId: string;
  dog: Dog = {
    dogName: '',
    race: '',
    dogAge: 0,
    dogOwner: '',
    dogInfo: '',
    dogId: ''
  }

  constructor(
    private dogService: DogService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    //Get id from url
    this.dogId = this.route.snapshot.params['dogId'];
    //Get Dog
    this.dogService.getDog(this.dogId).subscribe(dog => {
      this.dog = dog;  
    });
  }

  onSubmit({value, valid}: {value: Dog, valid: boolean}){
    if(!valid) {
      this.flashMessage.show('Pleas fill out the form correctly', {
        cssClass: 'alert-danger', timeout:4000
    });
    }else{
      //Add Id to Dog becaus it is not in the edit form.
      value.dogId = this.dogId;
      //Update the Dog
      this.dogService.updateDog(value);
      this.flashMessage.show('Dog updatet', {
        cssClass: 'alert-success', timeout:4000
    });
      this.router.navigate(['/dogs/'+this.dogId]);

    }
  }

}
