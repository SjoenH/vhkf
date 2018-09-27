webpackJsonp([2],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MottakPageModule", function() { return MottakPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mottak__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MottakPageModule = (function () {
    function MottakPageModule() {
    }
    return MottakPageModule;
}());
MottakPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mottak__["a" /* MottakPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mottak__["a" /* MottakPage */]),
        ],
    })
], MottakPageModule);

//# sourceMappingURL=mottak.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MottakPage; });
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



/**
 * Generated class for the MottakPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MottakPage = (function () {
    function MottakPage(navCtrl, navParams, concertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.concertService = concertService;
        this.concert = navParams.get('concert');
        this.refreshData(concertService);
    }
    // noinspection JSUnusedGlobalSymbols
    MottakPage.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MottakPage');
    };
    MottakPage.prototype.goToUserTickets = function (user) {
        this.navCtrl.push('EditUserPage', { 'user': user });
    };
    MottakPage.prototype.refreshData = function (concertService) {
        var _this = this;
        this._concertService = concertService;
        this.concertService.getUsersWithTicketToConcert(this.concert._id).then(function (users) {
            _this.usersWithTickets = users;
            console.log(_this.usersWithTickets);
        });
    };
    return MottakPage;
}());
MottakPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mottak',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/mottak/mottak.html"*/'<!--\n  Generated template for the MottakPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mottak</ion-title>\n    <ion-buttons right>\n        <button ion-button outline color="primary" (click)="refreshData()">Oppfrisk data</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item-group>\n      <ion-item-divider color="light">Personer med billett til {{concert.title}}</ion-item-divider>\n      <ion-item (click)=\'goToUserTickets(user)\' *ngFor=\'let user of usersWithTickets\'>{{user.name}} </ion-item> \n    </ion-item-group>\n  </ion-content>\n'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/mottak/mottak.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_concerts_concerts__["a" /* ConcertsProvider */]])
], MottakPage);

//# sourceMappingURL=mottak.js.map

/***/ })

});
//# sourceMappingURL=2.js.map