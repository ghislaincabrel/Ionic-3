import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UploardFilePage } from '../pages/uploard-file/uploard-file';
import { EditPersonalInformationPage } from '../pages/edit-personal-information/edit-personal-information';
import { UserPage } from '../pages/user/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;


  constructor(private platform: Platform, private statusBar: StatusBar,
    private splashScreen: SplashScreen, ) {


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: UserPage },
      { title: 'Uploarded Files', component: UploardFilePage },
      { title: 'Edit personal information', component: EditPersonalInformationPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(HomePage);
  }
}



