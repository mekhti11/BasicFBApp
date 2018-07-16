import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CommentPage } from '../pages/comment/comment'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PostsProvider } from '../providers/posts/posts';



export const config = {
    apiKey: "AIzaSyBnrJYGOw4mdlJohM6n2P9GCgtRnJfLyt0",
    authDomain: "commentapp-f8889.firebaseapp.com",
    databaseURL: "https://commentapp-f8889.firebaseio.com",
    projectId: "commentapp-f8889",
    storageBucket: "commentapp-f8889.appspot.com",
    messagingSenderId: "201048579979"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CommentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CommentPage
  ],
  providers: [
    PostsProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
