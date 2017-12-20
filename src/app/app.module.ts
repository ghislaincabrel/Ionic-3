import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage} from '../pages/sign-up/sign-up';
import {UserPage } from '../pages/user/user';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule } from '@angular/http';
import { UploardFilePage } from '../pages/uploard-file/uploard-file';
import { EditPersonalInformationPage } from '../pages/edit-personal-information/edit-personal-information';
import { ViewGraphPage} from '../pages/view-graph/view-graph';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    UserPage,
    UploardFilePage,
    EditPersonalInformationPage,
    ViewGraphPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    UserPage,
    UploardFilePage,
    EditPersonalInformationPage,
    ViewGraphPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}
