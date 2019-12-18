import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Dog } from '../models/Dog';


@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogsCollection: AngularFirestoreCollection<Dog>;
  dogDoc: AngularFirestoreDocument<Dog>;
  dogs: Observable<Dog[]>;
  dog: Observable<Dog>;

  constructor(private afs: AngularFirestore) {
    this.dogsCollection = this.afs.collection("dogs2");
   }

   getDogs(): Observable<Dog[]> {
     //Get Dog ID, method from Firebase
     this.dogs = this.dogsCollection.snapshotChanges().pipe(
        map(actions => actions.map(action => {
         const data = action.payload.doc.data() as Dog;
         data.dogId = action.payload.doc.id;
         return data;
       }))
     );
     return this.dogs;
   }

   newDog(dog: Dog) {
    this.dogsCollection.add(dog);
   }

   getDog(dogId: string): Observable<Dog> {
    this.dogDoc = this.afs.doc<Dog>(`dogs2/${dogId}`);
    this.dog = this.dogDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false) {
          return null;
        }else {
          const data = action.payload.data() as Dog;
          data.dogId = action.payload.id;
          return data;
        }
      })
    );
    return this.dog;
  }
  updateDog(dog: Dog) {
    this.dogDoc = this.afs.doc(`dogs2/${dog.dogId}`);
    this.dogDoc.update(dog);
  }
  
  deleteDog(dog: Dog) {
    this.dogDoc = this.afs.doc(`dogs2/${dog.dogId}`);
    this.dogDoc.delete();
  }  


}
