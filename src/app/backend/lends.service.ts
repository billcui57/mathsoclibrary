import { Injectable } from '@angular/core';
import { Lend } from '../classes/lend';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LendsService {

  constructor(private firestore: AngularFirestore) { }



  createLend(lend: Lend){
    return this.firestore.collection('lends').add(JSON.parse(JSON.stringify(lend)));
  }

  
}
