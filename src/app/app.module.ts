import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';
// import { AuthService } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';

import { MenuServiceProvider } from '../providers/menu-service/menu-service';


export const firebaseConfig = {
  apiKey: "AIzaSyDq8C0phRvyvnvIULYvCljXLvD1jjCpx1w",
  authDomain: "wiredbrainsample.firebaseapp.com",
  databaseURL: "http://wiredbrainsample.firebaseio.com",
  storageBucket: "wiredbrainsample.appspot.com",
  messagingSenderId: '581926218812'
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    MenuServiceProvider,
    // AuthService,
  ]
})
export class AppModule {}
