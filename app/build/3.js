webpackJsonp([3],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditUserPageModule = (function () {
    function EditUserPageModule() {
    }
    return EditUserPageModule;
}());
EditUserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_user__["a" /* EditUserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_user__["a" /* EditUserPage */]),
        ],
    })
], EditUserPageModule);

//# sourceMappingURL=edit-user.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_concerts_concerts__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditUserPage = (function () {
    function EditUserPage(navParams, alertCtrl, concertService, toastCtrl) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.concertService = concertService;
        this.toastCtrl = toastCtrl;
        this.user = navParams.get('user');
        console.log(this.user);
        this.makeUserConcerts();
    }
    EditUserPage.prototype.makeUserConcerts = function () {
        var _this = this;
        this.concertService.getConcerts().then(function (concerts) {
            _this.concerts = concerts;
            var _loop_1 = function (concert) {
                _this.concertService.getNumberOfAvailableTickets(concert).then(function (n) {
                    concert.availableTickets = n;
                });
                concert.number = 0;
                for (var _i = 0, _a = _this.user.concerts; _i < _a.length; _i++) {
                    var ticket_id = _a[_i];
                    if (ticket_id == concert._id) {
                        concert.number += 1;
                    }
                }
            };
            // console.log(this.concerts);
            for (var _i = 0, _a = _this.concerts; _i < _a.length; _i++) {
                var concert = _a[_i];
                _loop_1(concert);
            }
        });
    };
    // noinspection JSUnusedGlobalSymbols
    EditUserPage.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserPage');
    };
    EditUserPage.prototype.saveChanges = function () {
        var _this = this;
        //remove all concerts
        this.user.concerts = [];
        // Update this user so that it has corresponding concert-tickets in user.concerts
        for (var _i = 0, _a = this.concerts; _i < _a.length; _i++) {
            var concert = _a[_i];
            for (var i = 0; i < concert.number; i++) {
                console.log(concert.title + ':' + concert.number);
                this.user.concerts.push(concert._id);
            }
        }
        console.log(this.user);
        this.concertService.updateUser(this.user._id, this.user).then(function () {
            _this.presentToast();
        });
    };
    EditUserPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Bruker oppdatert',
            duration: 3000
        });
        toast.present();
    };
    return EditUserPage;
}());
EditUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-user',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/edit-user/edit-user.html"*/'<!--\n  Generated template for the EditUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editUser</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Navn</ion-label>\n      <ion-input [(ngModel)]="user.name" type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n  <!-- <ion-item-divider>Konserter:</ion-item-divider> -->\n  <ion-item-group>\n    <ion-item *ngFor=\'let concert of concerts\'>\n      <ion-label>{{concert.title}} ({{concert.availableTickets}}*)</ion-label>\n      <ion-input [(ngModel)]=\'concert.number\' type=\'number\'></ion-input>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item>\n      <ion-label fixed>Betalt Totalt*</ion-label>\n      <ion-input [(ngModel)]=\'user.moneyPayed\' type="number"></ion-input>\n    </ion-item>\n    <ion-item-divider>*antall tilgjengelige billetter <br>**Hvor mye har denne personen betalt?</ion-item-divider>\n  </ion-item-group>\n  <button ion-button full color=\'primary\' (click)=\'saveChanges()\'>Lagre endringer</button>\n  <ion-item-group>\n    <ion-item>\n      <ion-label>Administrator</ion-label>\n      <ion-checkbox color="dark" [(ngModel)]=\'user.admin\'></ion-checkbox>\n    </ion-item>\n  </ion-item-group>\n</ion-content>'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/edit-user/edit-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_concerts_concerts__["a" /* ConcertsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], EditUserPage);

//# sourceMappingURL=edit-user.js.map

/***/ })

});
//# sourceMappingURL=3.js.map