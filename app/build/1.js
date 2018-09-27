webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminPageModule", function() { return UserAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_admin__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserAdminPageModule = (function () {
    function UserAdminPageModule() {
    }
    return UserAdminPageModule;
}());
UserAdminPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_admin__["a" /* UserAdminPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_admin__["a" /* UserAdminPage */]),
        ],
    })
], UserAdminPageModule);

//# sourceMappingURL=user-admin.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAdminPage; });
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



var UserAdminPage = (function () {
    function UserAdminPage(navCtrl, concertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.concertService = concertService;
        this.alertCtrl = alertCtrl;
    }
    // noinspection JSUnusedGlobalSymbols
    UserAdminPage.prototype.ionViewDidLoad = function () {
        this.refreshData();
    };
    UserAdminPage.prototype.refreshData = function () {
        var _this = this;
        this.concertService.getAllUsers().then(function (users) {
            _this.users = users;
        });
    };
    UserAdminPage.prototype.doRefresh = function (refresher) {
        this.refreshData();
        refresher.complete();
        console.log('Feeling Re-Fresh`d?');
    };
    UserAdminPage.prototype.newUser = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Opprette bruker',
            message: "Skriv inn navn for brukeren",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Navn'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.concertService.addNewUser({ name: data.name, concerts: [], passes: null }).then(function (user) {
                            _this.goToUserAdminDetailPage(user);
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    UserAdminPage.prototype.goToUserAdminDetailPage = function (user) {
        this.navCtrl.push('EditUserPage', { 'user': user });
    };
    UserAdminPage.prototype.presentConfirmDelete = function (user) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Fjerne bruker',
            message: 'Er du sikker på at du vil fjerne denne brukeren?' + user.name,
            buttons: [
                {
                    text: 'Avbryt',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelled");
                    }
                },
                {
                    text: 'Fjern Bruker',
                    handler: function () {
                        _this.deleteUser(user);
                        _this.refreshData();
                    }
                }
            ]
        });
        alert.present();
    };
    UserAdminPage.prototype.deleteUser = function (user) {
        // TODO: implement
        this.concertService.deleteUser(user._id);
        this.refreshData();
    };
    return UserAdminPage;
}());
UserAdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-admin',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/user-admin/user-admin.html"*/'<!--\n  Generated template for the UserAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BrukerAdministrasjon</ion-title>\n    <ion-buttons right>\n      <button ion-button outline color="primary" (click)="newUser()">Ny bruker</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <ion-item-divider color="light">Users</ion-item-divider>\n  <ion-list>\n    <ion-item-sliding *ngFor=\'let user of users\'>\n      <ion-item (click)=\'goToUserAdminDetailPage(user)\'>{{user.name}} | {{user.concerts.length}} Billetter <span *ngIf=\'user.admin\'>| ADMINISTRATOR</span> </ion-item>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)=\'presentConfirmDelete(user)\'>\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/user-admin/user-admin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_concerts_concerts__["a" /* ConcertsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], UserAdminPage);

//# sourceMappingURL=user-admin.js.map

/***/ })

});
//# sourceMappingURL=1.js.map