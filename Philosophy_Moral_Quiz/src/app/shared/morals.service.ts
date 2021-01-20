import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MoralsService {

  constructor( private firestore: AngularFirestore ) { }

  createMoral(data:any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("morals")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  getMorals() { 
    return this.firestore.collection("morals").snapshotChanges();
  }

  updateMoral(id:string, data:any) {
    return this.firestore
        .collection("morals")
        .doc(id)
        .update({ moral: data.moral, vote: +data.vote });
  }

  deleteMoral(id:string) {
    return this.firestore
        .collection("morals")
        .doc(id)
        .delete();
 }

}