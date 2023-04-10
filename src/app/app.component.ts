import { Component, OnInit } from '@angular/core';
import { Firestore, getDocs, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private firestore: Firestore) {}

  querySnapshot: any;

  async getData() {
    console.log('Getting data!');
    this.querySnapshot = await getDocs(collection(this.firestore, 'test'));
    this.querySnapshot.forEach((document: any) => {
      console.log(`${document.id} => ${document.data().name}`);
    });
  }
  ngOnInit(): void {
    this.getData();
  }
}
