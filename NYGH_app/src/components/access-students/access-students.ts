
import { Component, OnInit } from '@angular/core';
import { StudentProvider } from '../../providers/student/student';

/**
 * Generated class for the AccessStudentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'access-students',
  templateUrl: 'access-students.html'
})
export class AccessStudentsComponent implements OnInit {

  students;
  text: string;
  test: string = 'hello';

  constructor(private studentProvider: StudentProvider) {
    console.log('Hello AccessStudentsComponent Component');
    //this.text = 'Hello World';
  }

  ngOnInit() {

    this.students = this.studentProvider.getStudents();
    console.log(this.students);

    //console.log(this.students.items.student.name["-LC0Ek_2poAO5qbgNfSu"]);
    //this.text = this.students.items.student.name["-LC0Ek_2poAO5qbgNfSu"];
    //console.log(this.text);
    
    // this.studentProvider.getStudents().subscribe(students => {
    //   console.log(students);
    // });
    //this.studentProvider.getStudents().subscribe();
  }

}
