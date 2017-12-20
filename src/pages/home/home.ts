import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { UserPage } from '../user/user';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  data: any;
  value: any[];
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController, private _service: RemoteServiceProvider) {
    this._service = _service;

  }
  signUp() {
    this.navCtrl.push(SignUpPage);
  }
  onSubmit(login) {
    console.log(JSON.stringify(login.value));
//send login form
this._service.login(login.value);
  
  
 //respond of the backend
    this.showLoader();
    this._service.getPost().subscribe(data => {
      this.loading.dismiss();
      let responseData = data;
      console.log(responseData);
     // localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(UserPage);
    },
      err => {
        this.loading.dismiss();
        this.presentToast(err);
      });
  }

  /* Submit(login) {
      this.showLoader();
     // this._service.login(login).then((result) => {
        this.loading.dismiss();
        this.data = result;
        localStorage.setItem('token', this.data.access_token);
        this.navCtrl.setRoot(UserPage);
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
    }
   */

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
