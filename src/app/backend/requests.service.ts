import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TextbookRequest } from '../interfaces/textbook';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private firestore: AngularFirestore) { }

  getRequests() {
    return this.firestore.collection('requests').snapshotChanges();
  }

  createRequests(request: TextbookRequest) {
    return this.firestore.collection('requests').add(JSON.parse(JSON.stringify(request)));
  }

  updateRequests(request: TextbookRequest) {
    delete request.title
    this.firestore.doc('requests/' + request.title).update(request);
  }

  
}
