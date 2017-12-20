webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPersonalInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditPersonalInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPersonalInformationPage = (function () {
    function EditPersonalInformationPage(navCtrl, navParams, toastCtrl, _service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this._service = _service;
    }
    EditPersonalInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPersonalInformationPage');
    };
    EditPersonalInformationPage.prototype.onUpdate = function (signUp) {
        this._service.postRequest(signUp.value);
        var toast = this.toastCtrl.create({
            message: 'Your account was Updated successfully',
            duration: 4000
        });
        toast.present();
    };
    EditPersonalInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-personal-information',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/edit-personal-information/edit-personal-information.html"*/'<!--\n  Generated template for the EditPersonalInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Edit Personal Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #signUp="ngForm" novalidate (ngSubmit)="onUpdate(signUp)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" name="firstName" required [(ngModel)]="firstName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.firstName && (signUp.controls.firstName.valid ||\n(signUp.controls.firstName.pristine && !isSubmitted))" class="note danger">\n        The First Name  is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="lastName" required [(ngModel)]="lastName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.lastName && (signUp.controls.lastName.valid ||\n      (signUp.controls.lastName.pristine && !isSubmitted))" class="note danger">\n        The Last Name is required\n      </div>\n \n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="number" name="phoneNumber" required [(ngModel)]="phoneNumber">\n        </ion-input>\n      </ion-item>\n      \n       \n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" name="email" required [(ngModel)]="email">\n          </ion-input>\n        </ion-item>\n        <div [hidden]="signUp.controls.email && (signUp.controls.email.valid ||\n(signUp.controls.email.pristine && !isSubmitted))" class="note danger">\n          The Email is required\n        </div>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <div *ngIf="(isSubmitted && signUp.controls.password &&\nsignUp.controls.password.pristine) || ((signUp.controls.password) &&\n(signUp.controls.password.dirty && signUp.controls.password.errors))" class="note danger">\n          Please enter {{ 5 - (signUp.controls.password.errors.minlength ? signUp.controls.password.errors.minlength.actualLength : 0) }} more\n          characters\n        </div>\n      </ion-list>\n      <div class="center">\n        <button ion-button type="submit" round outline [disabled]="!signUp.form.valid"> Save</button>\n      </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/edit-personal-information/edit-personal-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], EditPersonalInformationPage);
    return EditPersonalInformationPage;
}());

//# sourceMappingURL=edit-personal-information.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, toastCtrl, _service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this._service = _service;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.onSubmit = function (signUp) {
        this._service.postRequest(signUp.value);
        var toast = this.toastCtrl.create({
            message: 'Your account was created successfully',
            duration: 4000
        });
        toast.present();
        this.navCtrl.pop();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sign-up Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #signUp="ngForm" novalidate (ngSubmit)="onSubmit(signUp)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" name="firstName" required [(ngModel)]="firstName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.firstName && (signUp.controls.firstName.valid ||\n(signUp.controls.firstName.pristine && !isSubmitted))" class="note danger">\n        The First Name  is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="lastName" required [(ngModel)]="lastName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.lastName && (signUp.controls.lastName.valid ||\n      (signUp.controls.lastName.pristine && !isSubmitted))" class="note danger">\n        The Last Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="username">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.username && (signUp.controls.username.valid ||\n            (signUp.controls.username.pristine && !isSubmitted))" class="note danger">\n        The Username is required\n      </div>\n \n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="number" name="phoneNumber" required [(ngModel)]="phoneNumber">\n        </ion-input>\n      </ion-item>\n      \n       \n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" name="email" required [(ngModel)]="email">\n          </ion-input>\n        </ion-item>\n        <div [hidden]="signUp.controls.email && (signUp.controls.email.valid ||\n(signUp.controls.email.pristine && !isSubmitted))" class="note danger">\n          The Email is required\n        </div>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <div *ngIf="(isSubmitted && signUp.controls.password &&\nsignUp.controls.password.pristine) || ((signUp.controls.password) &&\n(signUp.controls.password.dirty && signUp.controls.password.errors))" class="note danger">\n          Please enter {{ 5 - (signUp.controls.password.errors.minlength ? signUp.controls.password.errors.minlength.actualLength : 0) }} more\n          characters\n        </div>\n      </ion-list>\n      <div class="center">\n        <button ion-button type="submit" round outline [disabled]="!signUp.form.valid"> Save</button>\n      </div>\n\n  </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploardFilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UploardFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploardFilePage = (function () {
    function UploardFilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploardFilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploardFilePage');
    };
    UploardFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploard-file',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/uploard-file/uploard-file.html"*/'<!--\n  Generated template for the UploardFilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Uploarded Files\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/uploard-file/uploard-file.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UploardFilePage);
    return UploardFilePage;
}());

//# sourceMappingURL=uploard-file.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewGraphPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewGraphPage = (function () {
    function ViewGraphPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewGraphPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewGraphPage');
    };
    ViewGraphPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-graph',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/view-graph/view-graph.html"*/'<!--\n  Generated template for the ViewGraphPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view Graph</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/view-graph/view-graph.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewGraphPage);
    return ViewGraphPage;
}());

//# sourceMappingURL=view-graph.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-personal-information/edit-personal-information.module": [
		289,
		4
	],
	"../pages/sign-up/sign-up.module": [
		290,
		3
	],
	"../pages/uploard-file/uploard-file.module": [
		291,
		2
	],
	"../pages/user/user.module": [
		292,
		1
	],
	"../pages/view-graph/view-graph.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, toastCtrl, _service) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this._service = _service;
    }
    HomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    HomePage.prototype.onSubmit = function (login) {
        var _this = this;
        console.log(JSON.stringify(login.value));
        //send login form
        this._service.login(login.value);
        //respond of the backend
        this.showLoader();
        this._service.getPost().subscribe(function (data) {
            _this.loading.dismiss();
            var responseData = data;
            console.log(responseData);
            // localStorage.setItem('token', this.data.access_token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
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
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Contact Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="contact"></ion-icon>\n  </p>\n  <form #login="ngForm" novalidate (ngSubmit)="onSubmit(login)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>User Name</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="email">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="login.controls.username && (login.controls.username.valid ||\n(login.controls.username.pristine && !isSubmitted))" class="note danger">\n        The User Name is required\n      </div>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <div *ngIf="(isSubmitted && f.controls.password &&\nlogin.controls.password.pristine) || ((login.controls.password) &&\n(login.controls.password.dirty && login.controls.password.errors))" class="note danger">\n        Please enter {{ 5 - (login.controls.password.errors.minlength ? login.controls.password.errors.minlength.actualLength : 0) }} more\n        characters\n      </div>\n    </ion-list>\n    <div class="center">\n      <button ion-button type="submit" round outline [disabled]="!login.form.valid"><ion-icon name="send"> </ion-icon> Login</button>\n    </div>\n\n  </form>\n  <div class="padding">\n    <ion-navbar color="light">\n      <h3 class="center">\n        <button ion-button (click)="signUp()">Sign-Up</button>\n\n      </h3>\n    </ion-navbar>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__["a" /* UploardFilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__["a" /* ViewGraphPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-personal-information/edit-personal-information.module#EditPersonalInformationPageModule', name: 'EditPersonalInformationPage', segment: 'edit-personal-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploard-file/uploard-file.module#UploardFilePageModule', name: 'UploardFilePage', segment: 'uploard-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-graph/view-graph.module#ViewGraphPageModule', name: 'ViewGraphPage', segment: 'view-graph', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__["a" /* UploardFilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__["a" /* ViewGraphPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_uploard_file_uploard_file__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_personal_information_edit_personal_information__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */] },
            { title: 'Uploarded Files', component: __WEBPACK_IMPORTED_MODULE_5__pages_uploard_file_uploard_file__["a" /* UploardFilePage */] },
            { title: 'Edit personal information', component: __WEBPACK_IMPORTED_MODULE_6__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/admin123/lte-analyses/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button >\n      <button menuClose ion-item (click)="logout()" >\n           Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/admin123/lte-analyses/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';





/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = (function () {
    function RemoteServiceProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    RemoteServiceProvider.prototype.getPost = function () {
        var timeoutMS = 100000;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://jsonplaceholder.typicode.com/posts", options)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); });
    };
    RemoteServiceProvider.prototype.postRequest = function (postParams) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RemoteServiceProvider.prototype.postFile = function (postParams) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RemoteServiceProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('X-Auth-Token', localStorage.getItem('token'));
            _this.http.post(_this.url, {}, { headers: headers })
                .subscribe(function (res) {
                localStorage.clear();
            }, function (err) {
                reject(err);
            });
        });
    };
    RemoteServiceProvider.prototype.login = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("http://jsonplaceholder.typicode.com/posts", JSON.stringify(params), options)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RemoteServiceProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RemoteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());

//# sourceMappingURL=remote-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_graph_view_graph__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, app, loadingCtrl, toastCtrl, _service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
        this._service.postFile("/home/admin123/lte-analyses/package-lock.json");
    };
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
    UserPage.prototype.viewGraaph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_graph_view_graph__["a" /* ViewGraphPage */]);
    };
    UserPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    UserPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UserPage.prototype.onFile = function (file) {
        console.log(file.value);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      User Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="getting-started">\n  <p class="center" color="secondary">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #file="ngForm" (ngSubmit)="onFile(file)">\n    <ion-list>\n      <ion-item>\n        <label class="item item-input">\n          <input type="file" id="upimgfile" name="uploadfile">\n        </label>\n      </ion-item>\n    </ion-list>\n\n    <div class="center">\n      <button ion-button type="submit" round outline>\n        <ion-icon name="send"></ion-icon> Send</button>\n\n    </div>\n    <button ion-button full (click)="viewGraaph()"> View Graph</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map