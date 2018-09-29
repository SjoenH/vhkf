webpackJsonp([9],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConcertPage; });
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


var EditConcertPage = (function () {
    function EditConcertPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var concert = navParams.get('concert');
        this.concert = concert;
        console.log(concert._id);
        this.title = concert.title;
        this.description = concert.description;
        this.location = concert.location;
        this.datetime = concert.datetime;
        this.totalNumberOfTickets = concert.totalNumberOfTickets;
        this.imgURL = concert.imgURL;
    }
    EditConcertPage.prototype.save = function () {
        console.log("Saving changes");
        var concert = {
            _id: this.concert._id,
            title: this.title,
            description: this.description,
            totalNumberOfTickets: this.totalNumberOfTickets,
            datetime: this.datetime,
            imgURL: this.imgURL,
            location: this.location
        };
        this.viewCtrl.dismiss(concert);
    };
    EditConcertPage.prototype.close = function () {
        console.log("no changes");
        this.viewCtrl.dismiss();
    };
    return EditConcertPage;
}());
EditConcertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-concert',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/edit-concert/edit-concert.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Endre konsert</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list no-lines>\n\n    <ion-item>\n      <ion-label floating>Tittel</ion-label>\n      <ion-input [(ngModel)]="title" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Beskrivelse</ion-label>\n      <ion-textarea [(ngModel)]="description" cols="30" rows="10"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Sted</ion-label>\n      <ion-input [(ngModel)]="location" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Totalt antall billetter</ion-label>\n      <ion-input type="number" [(ngModel)]="totalNumberOfTickets"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Bildeadresse</ion-label>\n      <ion-input [(ngModel)]="imgURL" type="text"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label>Dato</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" min="2017" max="2030-10-31" [(ngModel)]="datetime"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <p>Det er en bug i input, venligst sett tiden til en time før faktisk tid.</p>\n  <p>{{datetime|date:\'medium\'}}</p>\n  <button ion-button full color="secondary" (click)="save()">Save</button>\n  <!-- <button ion-button full color="danger" (click)="delete()">Remove</button> -->\n</ion-content>'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/edit-concert/edit-concert.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], EditConcertPage);

//# sourceMappingURL=edit-concert.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddConcertPage; });
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


var AddConcertPage = (function () {
    function AddConcertPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.title = "";
        this.description = "";
        this.location = "";
        this.totalNumberOfTickets = 0;
    }
    AddConcertPage.prototype.save = function () {
        if (!this.imgURL)
            this.imgURL = "http://via.placeholder.com/350x250";
        var concert = {
            title: this.title,
            description: this.description,
            totalNumberOfTickets: this.totalNumberOfTickets,
            datetime: this.datetime,
            imgURL: this.imgURL,
            location: this.location
        };
        this.viewCtrl.dismiss(concert);
    };
    AddConcertPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return AddConcertPage;
}());
AddConcertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-concert',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/add-concert/add-concert.html"*/'<ion-header>\n  <ion-toolbar transparent>\n    <ion-title>Add Concert</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list no-lines>\n\n    <ion-item>\n      <ion-label floating>Tittel</ion-label>\n      <ion-input [(ngModel)]="title" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Beskrivelse</ion-label>\n      <ion-textarea [(ngModel)]="description"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Sted</ion-label>\n      <ion-input [(ngModel)]="location" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Totalt antall billetter</ion-label>\n      <ion-input type="number" [(ngModel)]="totalNumberOfTickets"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Bildeadresse</ion-label>\n      <ion-input [(ngModel)]="imgURL" type="text"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label>Dato</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" min="2017" max="2017-10-31" [(ngModel)]="datetime"></ion-datetime>\n      <!-- <ion-datetime displayFormat="MMMM YYYY" min="2016" max="2020-10-31" [(ngModel)]="datetime"></ion-datetime> -->\n    </ion-item>\n\n  </ion-list>\n  <p>Det er en bug i input, venligst sett tiden til en time før faktisk tid.</p>\n  <button ion-button full color="secondary" (click)="save()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/add-concert/add-concert.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AddConcertPage);

//# sourceMappingURL=add-concert.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concert_detail_concert_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_concert_add_concert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_concerts_concerts__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConcertsPage = (function () {
    function ConcertsPage(concertService, modalCtr, alertCtrl, storage) {
        this.concertService = concertService;
        this.modalCtr = modalCtr;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loading = true;
        this.user = { firstTime: true };
        this.updateUser();
    }
    ConcertsPage.prototype.closeIntro = function (user) {
        var _this = this;
        // If user.name is null then show a warning telling "you need to provide a name"
        if (user.name != null) {
            this.user.firstTime = false;
            this.concertService.addUser(user).then(function (res) {
                _this.user._id = res;
            });
        }
    };
    ConcertsPage.prototype.updateUser = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            _this.user = user;
        });
        this.concertService.getUser().then(function (res) {
            _this.user = res;
            _this.storage.set('user', res);
        });
    };
    ConcertsPage.prototype.goToSlide = function (number) {
        this.slides.slideTo(number, 500);
    };
    // noinspection JSUnusedGlobalSymbols
    ConcertsPage.prototype.ionViewWillEnter = function () {
        // console.log('ionViewDidLoad ConcertsPage');
        // noinspection JSIgnoredPromiseFromCall
        this.getConcerts();
        this.updateUser();
    };
    ConcertsPage.prototype.doRefresh = function (refresher) {
        this.updateUser();
        this.getConcerts().then(function () {
            refresher.complete();
        });
    };
    ConcertsPage.prototype.getConcerts = function () {
        var _this = this;
        console.log("Retrieving concerts");
        this.concertService.getConcerts().then(function (data) {
            _this.concerts = data;
            _this.sortEvents();
            _this.loading = false;
        });
        return Promise.resolve(true);
    };
    ConcertsPage.prototype.addConcert = function () {
        var _this = this;
        console.log("Added concert");
        var modal = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_4__add_concert_add_concert__["a" /* AddConcertPage */]);
        modal.onDidDismiss(function (concert) {
            if (concert) {
                _this.concertService.createConcert(concert).then(function (id) {
                    console.log("Resolved ID", id);
                    concert._id = id;
                });
                _this.concerts.push(concert);
                // noinspection JSIgnoredPromiseFromCall
                _this.getConcerts();
            }
        });
        modal.present();
    };
    ConcertsPage.prototype.deleteConcert = function (concert) {
        console.log("Deleted concert");
        //Remove locally
        var index = this.concerts.indexOf(concert);
        if (index > -1) {
            this.concerts.splice(index, 1);
        }
        //Remove from database
        this.concertService.deleteConcert(concert._id);
    };
    ConcertsPage.prototype.presentConfirmDelete = function (concert) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Slette event',
            message: 'Er du sikker på at du vil slette denne eventen?',
            buttons: [
                {
                    text: 'Avbryt',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelled");
                    }
                },
                {
                    text: 'Slett Event',
                    handler: function () {
                        _this.deleteConcert(concert);
                    }
                }
            ]
        });
        alert.present();
    };
    ConcertsPage.prototype.sortEvents = function () {
        console.log("Sorting events");
        this.concerts = this.concerts.sort(function (a, b) {
            return Date.parse(a.datetime) - Date.parse(b.datetime);
        });
        console.log(this.concerts);
    };
    ConcertsPage.prototype.itemSelected = function (concert) {
        var _this = this;
        var modal = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_3__concert_detail_concert_detail__["a" /* ConcertDetailPage */], { concert: concert });
        modal.onDidDismiss(function () {
            // noinspection JSIgnoredPromiseFromCall
            _this.getConcerts();
        });
        modal.present();
    };
    return ConcertsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], ConcertsPage.prototype, "slides", void 0);
ConcertsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-concerts',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/concerts/concerts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <!--<img src="../assets/logo.svg" height="70pt" width="100%"/>-->\n      Vorrå Huskonsertfestival\n    </ion-title>\n    <ion-buttons *ngIf="user.admin" right>\n      <button ion-button outline color="primary" (click)="addConcert()">+ Ny event</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <ion-slides *ngIf=\'user.firstTime\' pager>\n    <ion-slide style="background-color: rgba(255,255,255,0.9)">\n      <h2>Velkommen til Vorrå Huskonsertfestival!</h2>\n      <p>For å sikre deg plass på konserten må du huske å reservere billett her i app-en.</p>\n      <button ion-button (click)="goToSlide(1)">Neste</button>\n    </ion-slide>\n\n    <ion-slide style="background-color: rgba(255,255,255,0.9)">\n      <h2>For at vi skal kunne holde av billetter til deg, må vi vite hvem du er</h2>\n      <p><br></p>\n      <input type="text" placeholder="Navn Navnesen" [(ngModel)]=\'user.name\' />\n      <button ion-button (click)="goToSlide(2)">Neste</button>\n    </ion-slide>\n\n    <ion-slide style="background-color: rgba(255,255,255,0.9)">\n      <span *ngIf=\'user.name\'>\n        <h2>Hei på deg, {{user.name}}!</h2>\n        <p>Du kan nå bla gjennom alle konsertene og reservere billetter.</p>\n\n        <p>Din 1. og 2. konsert får du for 150 kroner. (Barn 100)</p>\n        <p>Din 3. konsert får du for 100 kroner. (Barn 50)</p>\n        <p>Din 4. konsert er gratis!</p>\n\n        <p>Du må huske å reservere de konsertene du skal gå på. Det er dessverre begrenset med plass i hvert hus.</p>\n        <button ion-button (click)=\'closeIntro(user)\'>Supert! Vis meg konsertene <ion-icon icon-right name=\'thumbs-up\'></ion-icon></button>\n      </span>\n      <span *ngIf=\'!user.name\'>\n        <h2>Du har glemt å oppgi et navn...</h2>\n        <button ion-button (click)=\'goToSlide(1)\'>Oisann!</button>\n      </span>\n    </ion-slide>\n  </ion-slides>\n  <span *ngIf=\'!user.firstTime\'>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-spinner *ngIf=\'loading\'></ion-spinner>\n    <span *ngFor="let concert of concerts">\n\n      <!--<ion-list no-lines >-->\n      <!--<ion-item-sliding *ngFor="let concert of concerts">-->\n      <!--<ion-item *ngIf="!concert.hidden">-->\n      <ion-card *ngIf="!concert.hidden" (click)="itemSelected(concert)">\n        <img src={{concert.imgURL}} />\n        <div class="card-title">{{concert.title}}</div>\n        <div class="card-subtitle">\n          <ion-icon name="clock"> {{concert.datetime| date:\'EEEE dd.MM HH:mm\':\'+0200\'}}</ion-icon>\n          <br>\n          <ion-icon name="pin"> {{concert.location}}\n          </ion-icon>\n        </div>\n      </ion-card>\n      <!--</ion-item>-->\n    </span>\n\n    <!-- Swipe to delete function -->\n    <!--<ion-item-options *ngIf="user.admin">-->\n    <!--<button ion-button color="danger" (click)="presentConfirmDelete(concert)">-->\n    <!--<ion-icon name="trash"></ion-icon>-->\n    <!--Delete-->\n    <!--</button>-->\n    <!--</ion-item-options>-->\n    <!--</ion-item-sliding>-->\n    <!--</ion-list>-->\n  </span>\n</ion-content>'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/concerts/concerts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_concerts_concerts__["a" /* ConcertsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], ConcertsPage);

//# sourceMappingURL=concerts.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_concerts_concerts__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concert_detail_concert_detail__ = __webpack_require__(50);
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
 * Generated class for the TicketsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TicketsPage = (function () {
    function TicketsPage(navCtrl, modalCtr, concertService) {
        this.navCtrl = navCtrl;
        this.modalCtr = modalCtr;
        this.concertService = concertService;
        this.user = {};
        this.updateUser();
    }
    TicketsPage.prototype.makeUserConcerts = function () {
        var _this = this;
        this.concertService.getConcerts().then(function (concerts) {
            _this.allConcerts = concerts;
            console.log(_this.allConcerts);
            for (var _i = 0, _a = _this.allConcerts; _i < _a.length; _i++) {
                var concert = _a[_i];
                concert.number = 0;
                for (var _b = 0, _c = _this.user.concerts; _b < _c.length; _b++) {
                    var ticket_id = _c[_b];
                    if (ticket_id == concert._id) {
                        concert.number += 1;
                    }
                }
            }
        });
    };
    TicketsPage.prototype.updateUser = function () {
        var _this = this;
        this.concertService.getUser().then(function (res) {
            _this.user = res;
            _this.makeUserConcerts();
        });
    };
    // noinspection JSUnusedGlobalSymbols
    TicketsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.updateUser();
        console.log('Retrieving concerts...');
        this.concertService.getReservedConcerts().then(function (data) {
            _this.concerts = data;
        });
    };
    TicketsPage.prototype.itemSelected = function (concert) {
        var modal = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_3__concert_detail_concert_detail__["a" /* ConcertDetailPage */], {
            concert: concert
        });
        modal.onDidDismiss(function () {
        });
        modal.present();
    };
    TicketsPage.prototype.goToUserAdminPage = function () {
        this.navCtrl.push('UserAdminPage');
    };
    return TicketsPage;
}());
TicketsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tickets',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/tickets/tickets.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vorrå Huskonsertfestival</ion-title>\n    <ion-buttons *ngIf="user.admin" right>\n      <button ion-button outline color="primary" (click)="goToUserAdminPage()">User Admin</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background">\n  <ion-card>\n    <ion-card-header>\n      <h1>{{user.name}}</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        Her listes alle dine billettreservasjoner. <br> Dersom det skulle være noen problemer eller spørsmål, ta kontakt\n        med Henry.\n        <ion-icon name="call" item-left></ion-icon>\n        <a href="tel:+47 984 36 185">984 36 185</a>\n      </p>\n      <hr>\n      <span *ngFor=\'let concert of allConcerts\'>\n      <ion-item *ngIf="!concert.hidden">\n        <ion-label>\n          {{concert.number}} <span\n          *ngIf=\'concert.number == 1\'>Billett</span><span\n          *ngIf=\'concert.number == 0 || concert.number > 1\'>Billetter</span>\n          | <b>{{concert.title }}</b>\n        </ion-label>\n      </ion-item>\n      </span>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-list no-lines>\n    <ion-item *ngFor="let concert of concerts">\n      <ion-card class="ticket" (click)="itemSelected(concert)">\n        <img src={{concert.imgURL}}/>\n        <div class="card-title">{{concert.title}}</div>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/tickets/tickets.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_concerts_concerts__["a" /* ConcertsProvider */]])
], TicketsPage);

//# sourceMappingURL=tickets.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-concert/add-concert.module": [
		276,
		8
	],
	"../pages/concert-detail/concert-detail.module": [
		275,
		7
	],
	"../pages/concerts/concerts.module": [
		277,
		6
	],
	"../pages/edit-concert/edit-concert.module": [
		274,
		5
	],
	"../pages/edit-user/edit-user.module": [
		279,
		3
	],
	"../pages/mottak/mottak.module": [
		280,
		2
	],
	"../pages/tickets/tickets.module": [
		278,
		4
	],
	"../pages/user-admin/user-admin.module": [
		281,
		1
	],
	"../pages/user-tickets/user-tickets.module": [
		282,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concerts_concerts__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_tickets__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__concerts_concerts__["a" /* ConcertsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__tickets_tickets__["a" /* TicketsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Konserter" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Mine Biletter" tabIcon="pricetags"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_concerts_concerts__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tickets_tickets__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_concert_detail_concert_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_concerts_concerts__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_concert_add_concert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_concert_edit_concert__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_concerts_concerts__["a" /* ConcertsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tickets_tickets__["a" /* TicketsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_concert_detail_concert_detail__["a" /* ConcertDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_concert_add_concert__["a" /* AddConcertPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_concert_edit_concert__["a" /* EditConcertPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/edit-concert/edit-concert.module#EditConcertPageModule', name: 'EditConcertPage', segment: 'edit-concert', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/concert-detail/concert-detail.module#ConcertDetailPageModule', name: 'ConcertDetailPage', segment: 'concert-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-concert/add-concert.module#AddConcertPageModule', name: 'AddConcertPage', segment: 'add-concert', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/concerts/concerts.module#ConcertsPageModule', name: 'ConcertsPage', segment: 'concerts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tickets/tickets.module#TicketsPageModule', name: 'TicketsPage', segment: 'tickets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mottak/mottak.module#MottakPageModule', name: 'MottakPage', segment: 'mottak', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-admin/user-admin.module#UserAdminPageModule', name: 'UserAdminPage', segment: 'user-admin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-tickets/user-tickets.module#UserTicketsPageModule', name: 'UserTicketsPage', segment: 'user-tickets', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_concerts_concerts__["a" /* ConcertsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tickets_tickets__["a" /* TicketsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_concert_detail_concert_detail__["a" /* ConcertDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_concert_add_concert__["a" /* AddConcertPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_concert_edit_concert__["a" /* EditConcertPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_concerts_concerts__["a" /* ConcertsProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var server_url = "https://infinite-citadel-36156.herokuapp.com";
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(server_url + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcertsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConcertsProvider = (function () {
    function ConcertsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.production = true;
        this.myConcerts = [];
        if (this.production) {
            this.server_url = "https://infinite-citadel-36156.herokuapp.com";
        }
        else {
            this.server_url = "http://localhost:8080";
        }
    }
    ConcertsProvider.prototype.addUser = function (user) {
        var _this = this;
        this.storage.set('user', user);
        console.log("Sending user to server: ", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.server_url + '/api/users', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                console.log("received from server: ", res.json());
                resolve(res.json()._id);
                _this.user = res.json();
                _this.storage.set('user_id', res.json()._id);
            });
        });
    };
    ConcertsProvider.prototype.addNewUser = function (user) {
        var _this = this;
        console.log("Sending user to server: ", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.server_url + '/api/users', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                console.log("received from server: ", res.json());
                resolve(res.json());
            });
        });
    };
    /**
     * Get current user from database. Returns a empty mock-user if no user available.
     */
    ConcertsProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('user_id').then(function (user_id) {
                console.log("Your user_id: ", user_id);
                if (user_id) {
                    // Get user from db and return
                    _this.http.get(_this.server_url + '/api/users/' + user_id)
                        .map(function (res) { return res.json(); }) //probably don't need to use map here...
                        .subscribe(function (user) {
                        _this.user = user;
                        console.log("user from server:", user);
                        if (user == null) {
                            resolve({ firstTime: true, name: null, passes: null });
                        }
                        else {
                            resolve(user);
                        }
                    });
                }
                else {
                    resolve({ firstTime: true, name: null, passes: null });
                }
            });
        });
    };
    ConcertsProvider.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.server_url + '/api/users').map(function (res) { return res.json(); }).subscribe(function (users) {
                users.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                resolve(users);
            });
        });
    };
    ConcertsProvider.prototype.getUserByID = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.server_url + '/api/users/' + user_id)
                .map(function (res) { return res.json(); }) //probably don't need to use map here...
                .subscribe(function (user) {
                resolve(user);
            });
        });
    };
    ConcertsProvider.prototype.getConcertByID = function (concert_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.server_url + '/api/concerts/' + concert_id)
                .map(function (res) { return res.json(); }) //probably don't need to use map here...
                .subscribe(function (user) {
                resolve(user);
            });
        });
    };
    ConcertsProvider.prototype.addToMyConcerts = function (concert, antall) {
        for (var i = 0; i < antall; i++) {
            this.user.concerts.push(concert._id);
        }
        // Send reservation to server
        // update the user with the reservation
        this.updateUser(this.user._id, this.user);
        console.log(this.user.concerts);
    };
    ConcertsProvider.prototype.updateUser = function (id, user) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            console.log('Sending: ', user);
            _this.http.put(_this.server_url + '/api/users/' + id, JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                console.log(res.json());
                resolve(res);
            });
        });
    };
    ConcertsProvider.prototype.getReservedConcerts = function () {
        var _this = this;
        this.getConcerts(); //<= just to make sure the data is up-to-date
        var returnedConcerts = [];
        return new Promise(function (resolve) {
            if (_this.user.concerts) {
                _this.user.concerts.forEach(function (concertId) {
                    console.log(concertId);
                    _this.data.forEach(function (element) {
                        if (element._id == concertId) {
                            returnedConcerts.push(element);
                        }
                    });
                });
            }
            console.log('returning:', returnedConcerts);
            resolve(returnedConcerts);
        });
    };
    ConcertsProvider.prototype.getConcerts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.server_url + '/api/concerts')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(data);
            });
        });
    };
    ConcertsProvider.prototype.createConcert = function (concert) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.server_url + '/api/concerts', JSON.stringify(concert), { headers: headers })
                .subscribe(function (res) {
                console.log(res.json());
                resolve(res.json()._id);
            });
        });
    };
    ConcertsProvider.prototype.updateConcert = function (id, concert) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log('Sending: ', concert);
        this.http.put(this.server_url + '/api/concerts/' + id, JSON.stringify(concert), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    ConcertsProvider.prototype.getNumberOfReservedTickets = function (concert_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getUsersWithTicketToConcert(concert_id).then(function (res) {
                var numberOfTickets = 0;
                for (var user in res) {
                    res[user].concerts.forEach(function (user_concert_id) {
                        if (user_concert_id == concert_id) {
                            numberOfTickets += 1;
                        }
                    });
                }
                console.log('getNumberOfReservedTickets', numberOfTickets);
                resolve(numberOfTickets);
            });
        });
    };
    ConcertsProvider.prototype.getNumberOfAvailableTickets = function (concert) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getNumberOfReservedTickets(concert._id).then(function (res) {
                var total = concert.totalNumberOfTickets;
                // const reserved: any = res;
                var sum = total - Number(res);
                resolve(sum);
            });
        });
    };
    ConcertsProvider.prototype.getUsersWithTicketToConcert = function (concert_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.get(_this.server_url + '/api/tickets/' + concert_id).map(function (res) { return res.json(); }).subscribe(function (users) {
                users.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                resolve(users);
            });
        });
    };
    ConcertsProvider.prototype.deleteConcert = function (id) {
        this.http.delete(this.server_url + '/api/concerts/' + id)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    ConcertsProvider.prototype.deleteUser = function (id) {
        this.http.delete(this.server_url + '/api/users/' + id)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return ConcertsProvider;
}());
ConcertsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], ConcertsProvider);

//# sourceMappingURL=concerts.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcertDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_concert_edit_concert__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_concerts_concerts__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConcertDetailPage = (function () {
    function ConcertDetailPage(alertCtrl, navCtrl, modalCtr, navParams, concertService, viewCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.modalCtr = modalCtr;
        this.navParams = navParams;
        this.concertService = concertService;
        this.viewCtrl = viewCtrl;
        this.user = {};
        this.concert = navParams.get('concert');
        var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        this.concertDateTime = new Date(this.concert.datetime).toLocaleString('NO', options);
        concertService.getUser().then(function (res) {
            _this.user = res;
        });
    }
    // noinspection JSUnusedGlobalSymbols
    ConcertDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConcertDetailPage');
        console.log(this.concert);
        this.updateAvailableTickets();
    };
    ConcertDetailPage.prototype.edit = function (concert) {
        var _this = this;
        console.log("editing concert");
        var modal = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_2__edit_concert_edit_concert__["a" /* EditConcertPage */], {
            concert: concert
        });
        modal.onDidDismiss(function (concert) {
            if (concert) {
                _this.concert = concert;
                _this.concertService.updateConcert(concert._id, concert);
            }
        });
        modal.present();
    };
    ConcertDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss(this.concert);
    };
    ConcertDetailPage.prototype.reserveConcert = function (concert) {
        var _this = this;
        this.concert = concert;
        var prompt = this.alertCtrl.create({
            title: 'Reserver',
            message: "Hvor mange billetter vil du reservere?",
            inputs: [
                {
                    name: 'antall',
                    placeholder: "Antall billetter",
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Avbryt',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Reserver',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.showConfirm(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    ConcertDetailPage.prototype.showConfirm = function (data) {
        var _this = this;
        if (data.antall <= this.tilgjengeligebilletter) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Godtar du betingelsene?',
                message: "Du reserverer nå " + data.antall + " billetter på navnet " + this.user.name + '. '
                    + 'Dette er en bindende billettreservasjon.',
                buttons: [
                    {
                        text: 'Avbryt',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Jeg godtar',
                        handler: function () {
                            console.log('Agree clicked');
                            _this.concertService.addToMyConcerts(_this.concert, data.antall);
                            _this.tilgjengeligebilletter -= data.antall;
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else if (!data.antall) {
            var confirm_2 = this.alertCtrl.create({
                title: 'Feil',
                message: 'Du har ikke fyllt inn hvor mange billetter du vil reservere.',
                buttons: [{ text: 'OK' }]
            });
            confirm_2.present();
        }
        else {
            var confirm_3 = this.alertCtrl.create({
                title: 'Ikke nok billetter',
                message: "Det er desverre bare " + this.tilgjengeligebilletter + " billett(er) igjen.",
                buttons: [{ text: 'OK' }]
            });
            confirm_3.present();
        }
        this.updateAvailableTickets();
    };
    ConcertDetailPage.prototype.updateAvailableTickets = function () {
        var _this = this;
        this.concertService.getNumberOfAvailableTickets(this.concert).then(function (n) {
            _this.tilgjengeligebilletter = n;
        });
    };
    ConcertDetailPage.prototype.goToMottak = function () {
        this.navCtrl.push('MottakPage', { 'concert': this.concert });
    };
    return ConcertDetailPage;
}());
ConcertDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-concert-detail',template:/*ion-inline-start:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/concert-detail/concert-detail.html"*/'<!--\n  Generated template for the ConcertDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Konsertdetaljer</ion-title>\n    <ion-buttons right>\n      <button *ngIf=\'user.admin\' (click)=\'goToMottak()\' ion-button outline color="primary">Mottak</button>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <img src={{concert.imgURL}} />\n    <ion-card-content>\n      <ion-card-title>\n        <h2>{{concert.title}}</h2>\n      </ion-card-title>\n      <p>\n        <ion-icon name="clock"></ion-icon>\n        | Tid: {{concert.datetime| date:\'EEEE dd.MM HH:mm\':\'+0200\'}}\n      </p>\n      <p>\n        <ion-icon name="navigate"></ion-icon>\n        | Sted: {{concert.location}}\n      </p>\n      <p>\n        <ion-icon name="pricetags"></ion-icon>\n        | Billetter igjen: <b>{{tilgjengeligebilletter}}</b>\n      </p>\n      <span *ngIf=\'tilgjengeligebilletter > 0\'>\n        <button ion-button full (click)="reserveConcert(concert)">Reserver billett</button>\n      </span>\n      <span *ngIf=\'tilgjengeligebilletter <= 0\'>\n        {{tilgjengeligebilletter}} ledige billetter.\n        <button ion-button full dark> Det er desverre ikke flere billetter</button>\n      </span>\n      <hr>\n      <div innerHTML={{concert.description}}></div>\n    </ion-card-content>\n  </ion-card>\n  <div padding>\n  </div>\n  <ion-fab *ngIf="user.admin" right bottom>\n    <button ion-fab color="secondary" (click)="edit(concert)">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/henry/Documents/GitHub/Huskonsertfestivalen-App/src/pages/concert-detail/concert-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_concerts_concerts__["a" /* ConcertsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], ConcertDetailPage);

//# sourceMappingURL=concert-detail.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map