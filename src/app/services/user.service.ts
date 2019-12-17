import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
   }

   getUsers(): Observable<User[]> {
     //Get client ID, method from Firebase
     this.users = this.usersCollection.snapshotChanges().pipe(
        map(actions => actions.map(action => {
         const data = action.payload.doc.data() as User;
         data.userId = action.payload.doc.id;
         return data;
       }))
     );
    
     return this.users;
   }
}
