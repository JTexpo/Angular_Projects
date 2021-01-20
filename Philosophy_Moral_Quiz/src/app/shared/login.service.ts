import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private firestore: AngularFirestore ) { }

  getLogins() { 
    return this.firestore.collection("login").snapshotChanges();
  }
}
