

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StudentProvider } from '../providers/student/student';
import { AccessStudentsComponent } from '../components/access-students/access-students';

var firebaseConfig = {
  apiKey: "AIzaSyB-7o0tKCzuXepyOZK7MxRg2gqyJfJpgmw",
  authDomain: "nyghdata.firebaseapp.com",
  databaseURL: "https://nyghdata.firebaseio.com",
  projectId: "nyghdata",
  storageBucket: "nyghdata.appspot.com",
  messagingSenderId: "395157155611"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccessStudentsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    HttpModule,
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentProvider
  ]
})
export class AppModule {}
