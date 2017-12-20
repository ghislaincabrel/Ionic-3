import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

/**
 * Generated class for the EditPersonalInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-personal-information',
  templateUrl: 'edit-personal-information.html',
})
export class EditPersonalInformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private _service: RemoteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPersonalInformationPage');
  }
  onUpdate(signUp) {
    this._service.postRequest(signUp.value);

    let toast = this.toastCtrl.create({
      message: 'Your account was Updated successfully',
      duration: 4000
    });
    toast.present();

   
  }
}

