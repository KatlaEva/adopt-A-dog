import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DogService } from '../../services/dog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../../models/Dog';


@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {
  dogId: string;
  dog: Dog;
  
  
  constructor(
    private dogService: DogService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    ) {}



  ngOnInit() {
    //Get id from url
    this.dogId = this.route.snapshot.params['dogId'];
    //Get Dog
    this.dogService.getDog(this.dogId).subscribe(dog => {
      if (dog != null) {
        this.dog = dog;
      }
      
    });
  }

  onDeleteClick() {
    if(confirm('Are you sure you want to delete the dog?')) {
      this.dogService.deleteDog(this.dog);
      this.flashMessage.show('Dog deletet', {
        cssClass: 'alert-success', timeout:4000
    });
      this.router.navigate(['/']);
    }
  }

}
