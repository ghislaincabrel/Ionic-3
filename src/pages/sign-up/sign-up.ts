import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController, private _service: RemoteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  onSubmit(signUp){
    this._service.postRequest(signUp.value);
 
    let toast = this.toastCtrl.create({
      message: 'Your account was created successfully',
      duration: 4000
    });
    toast.present();

  this.navCtrl.pop();
  }
}

