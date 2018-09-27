webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTicketsPageModule", function() { return UserTicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_tickets__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserTicketsPageModule = (function () {
    function UserTicketsPageModule() {
    }
    return UserTicketsPageModule;
}());
UserTicketsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_tickets__["a" /* UserTicketsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_tickets__["a" /* UserTicketsPage */]),
        ],
    })
], UserTicketsPageModule);

//# sourceMappingURL=user-tickets.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserTicketsPage = (function () {
    function UserTicketsPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.user = navParams.get('user');
        console.log(this.user);
    }
    UserTicketsPage.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserTicketsPage');
    };
    return UserTicketsPage;
}());
UserTicketsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-tickets',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/user-tickets/user-tickets.html"*/'<!--\n  Generated template for the UserTicketsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{user.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h1>Denne siden er under utvikling</h1>\n  <ion-item-group>\n    <ion-item>\n    </ion-item>\n    <ion-item-divider color="light">Billetter til denne konserten</ion-item-divider>\n    <p>Kryss av etter bekreftet betaling</p>\n    <!-- <ion-item (click)=\'presentActionSheet(ticket)\' *ngFor=\'let ticket of user.concerts\'>{{user.name}} | {{user.concerts.length}} Billetter -->\n    <ion-item *ngFor=\'let ticket of user.concerts\'>\n      <ion-label>{{ticket}}</ion-label>\n      <ion-checkbox color="dark" checked="false" disabled=\'true\'></ion-checkbox>\n    </ion-item>\n  </ion-item-group>\n  <ion-item>\n    <h2>Totalpris: {{user.concerts.length * 100}}</h2>\n    <p>Ett VHKF-bånd kan brukes til å betale én billett.</p>\n  </ion-item>\n  <hr>\n  <button ion-button full outline disabled=\'true\'>Se alle billetter til {{user.name}}</button>\n  <hr>\n  <button ion-button full color=\'secondary\' disabled=\'true\'>Lagre endringer</button>\n</ion-content>'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/user-tickets/user-tickets.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], UserTicketsPage);

//# sourceMappingURL=user-tickets.js.map

/***/ })

});
//# sourceMappingURL=0.js.map