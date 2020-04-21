import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TextbookRequest } from '../classes/textbook';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private firestore: AngularFirestore) { }

 
  createRequests(request: TextbookRequest) {
    return this.firestore.collection('requests').add(JSON.parse(JSON.stringify(request)));
  }

  

  
}
