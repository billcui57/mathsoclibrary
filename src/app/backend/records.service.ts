import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Lend } from '../classes/lend';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private firestore: AngularFirestore) { }


  getRecords(){
    return this.firestore.collection('records').snapshotChanges();
  }

  createRecord(record: Lend){
    return this.firestore.collection('records').add(JSON.parse(JSON.stringify(record)));
  }

 
}
