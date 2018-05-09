import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Student } from '../../app/models/student';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {

  studentCollection: AngularFirestoreCollection<Student>;
  students: Observable<Student[]>

  constructor(public http: HttpClient, public afs: AngularFirestore) {
    console.log('Hello StudentProvider Provider');
    this.students = this.afs.collection('students').valueChanges();
  }

  getStudents() {
    this.http.get('https://nyghdata.firebaseio.com/.json').subscribe(data => {
      console.log(data);
      //this.students = data.items;
      console.log(this.students);
    });

    // console.log('getStudents RAN!');
    return this.students;
  }

  recieveStudents() {
    this.students = this.afs.collection('students').valueChanges();
    console.log('recieveStudents RAN!', this.students);
    return this.students;
  }


}

