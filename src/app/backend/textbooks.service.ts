import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Textbook } from '../interfaces/textbook';

@Injectable({
  providedIn: 'root'
})
export class TextbooksService {

  constructor(private firestore: AngularFirestore) { }

  getTextbooks() {
    return this.firestore.collection('catalogue').snapshotChanges();
  }

  createTextbook(textbook: Textbook) {
    return this.firestore.collection('catalogue').add(textbook);
  }

  updateTextbook(textbook: Textbook) {
    delete textbook.title
    this.firestore.doc('catalogue/' + textbook.title).update(textbook);
  }

  deleteTextbook(textbookName: string){
    this.firestore.doc('catalogue/' + textbookName).delete();
}
}
