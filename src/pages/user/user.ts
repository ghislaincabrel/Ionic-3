import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UploardFilePage} from '../uploard-file/uploard-file';
import { EditPersonalInformationPage } from '../edit-personal-information/edit-personal-information';
import {HomePage} from '../home/home';
import { App, LoadingController, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { ViewGraphPage} from '../view-graph/view-graph';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  private rootPage;
  private uplorsFile;
  private editPersonalInformation;
  

  loading: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public app: App,
    public loadingCtrl: LoadingController,
     private toastCtrl: ToastController, private _service: RemoteServiceProvider) {
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this._service.postFile("/home/admin123/lte-analyses/package-lock.json");
  }
  
  // logout() {
  //   this._service.logout().then((result) => {
  //     this.loading.dismiss();
  //     let nav = this.app.getRootNav();
  //     nav.setRoot(HomePage);
  //   }, (err) => {
  //     this.loading.dismiss();
  //     this.presentToast(err);
  //   });
  // }

  viewGraaph(){
    this.navCtrl.push(ViewGraphPage);
  }
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
  onFile(file){
    console.log(file.value);

  }
}
