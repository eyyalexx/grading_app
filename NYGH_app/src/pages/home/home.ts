import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //arrData: Array[];
  myInput;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
    //this.arrData = db.list('/items').valueChanges();    
  }

  btnAddClicked(){
    this.db.list("items/student/name").push(this.myInput);
  }

  

}
