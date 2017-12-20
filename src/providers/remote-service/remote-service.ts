//import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';
import { NavController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  loading: any;
  url:string;
  constructor(public http: Http, private toastCtrl: ToastController) {

  }
getPost(): Observable<any[]> {
    let timeoutMS = 100000;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
  return this.http.get("http://jsonplaceholder.typicode.com/posts", options)
      .timeout(timeoutMS)
      .map(res => res.json());
  }


  postRequest(postParams) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }


  postFile(postParams) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }



  logout() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('X-Auth-Token', localStorage.getItem('token'));

      this.http.post(this.url, {}, { headers: headers })
        .subscribe(res => {
          localStorage.clear();
        }, (err) => {
          reject(err);
        });
    });
  }

  login(params) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    

    this.http.post("http://jsonplaceholder.typicode.com/posts", JSON.stringify(params), options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
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
