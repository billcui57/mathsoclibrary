import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Textbook } from '../classes/textbook';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class TextbooksService {

  private textbooks: Textbook[];


  constructor(private firestore: AngularFirestore) { }


  setTextbooks(textbooks: Textbook[]) {
    this.textbooks = textbooks;
  }

  getTextbooksNew() {
    return this.firestore.collection('catalogue').snapshotChanges();
  }

  getTextbooksCache() {
    return this.textbooks || [];
  }


  hasTextbooks() {
    return this.textbooks && this.textbooks.length;
  }

  incrementTextbookCount(textbook: Textbook) {
    this.firestore.collection('catalogue').doc(textbook.id).update({count: firebase.firestore.FieldValue.increment(1)})
  }

  decrementTextbookCount(textbook: Textbook) {
    this.firestore.collection('catalogue').doc(textbook.id).update({count: firebase.firestore.FieldValue.increment(-1)})
  }

  updateTextbooks(newTextbook: Textbook) {
    return this.firestore.collection("catalogue").doc(newTextbook.id).set({ count: newTextbook.count }, { merge: true });
  }


}
