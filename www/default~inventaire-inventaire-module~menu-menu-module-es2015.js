(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~inventaire-inventaire-module~menu-menu-module"],{

/***/ "8rUy":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-footer>\n  <ion-toolbar class=\"qr-scan\" >\n   <ion-fab-button  (click)=\"scan()\" > <ion-icon name=\"scan\"></ion-icon></ion-fab-button>\n  <span class=\"qr\">Scanner  Qr Code</span> \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "A7BC":
/*!***************************************!*\
  !*** ./src/app/footer/footer.page.ts ***!
  \***************************************/
/*! exports provided: FooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPage", function() { return FooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.page.html */ "8rUy");
/* harmony import */ var _footer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.page.scss */ "jiVj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_scan_product_scan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-scan/product-scan.component */ "vKMn");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crud.service */ "1vsn");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");








const options = {
    preferFrontCamera: false,
    showFlipCameraButton: false,
    showTorchButton: true,
    torchOn: false,
    prompt: 'Scanner Le code Qr du produit',
    resultDisplayDuration: 500,
    formats: 'QR_CODE,PDF_417 ',
    orientation: 'portrait',
};
let FooterPage = class FooterPage {
    constructor(crud, modalController, alertController, toastController, barcodeCtrl) {
        this.crud = crud;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.barcodeCtrl = barcodeCtrl;
    }
    ngOnInit() {
    }
    scan() {
        this.barcodeCtrl
            .scan(options)
            .then((barcodeData) => {
            this.Scanning(barcodeData.text);
        })
            .catch((err) => {
            this.error(err);
        });
    }
    Scanning(qrcode) {
        console.log('idMaterial## ' + qrcode);
        this.crud.getProductMaterial(qrcode).then((data) => {
            if (data) {
                this.presentModal(data);
            }
            else
                this.error('Une erreur interne est survenue,Merci de reprendre le scann');
        }, (error) => {
            this.error('Une erreur interne est survenue,merci de réessayer ultérieurement');
        });
    }
    presentModal(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                swipeToClose: true,
                component: _product_scan_product_scan_component__WEBPACK_IMPORTED_MODULE_4__["ProductScanComponent"],
                componentProps: {
                    item: item,
                },
            });
            return yield modal.present();
        });
    }
    error(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                color: 'danger',
            });
            toast.present();
        });
    }
};
FooterPage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"] }
];
FooterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterPage);



/***/ }),

/***/ "SQkA":
/*!**********************************************************!*\
  !*** ./src/app/product-scan/product-scan.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNjYW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "VS4q":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventaire/inventaire.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n \r\n\r\n  <ion-segment\r\n          [(ngModel)]=\"selectedSegement\"\r\n          (ionChange)=\"segmentChanged($event)\"\r\n          value=\"CreateInv\"\r\n           >\r\n          <ion-segment-button  value=\"CreateInv\">\r\n       \r\n              <ion-icon  src=\"../../assets/createInv.svg \"></ion-icon>\r\n              <ion-label>Create Inventaire</ion-label>\r\n          \r\n          </ion-segment-button>\r\n          <ion-segment-button  value=\"listInventaire\" >\r\n            \r\n              <ion-icon src=\"../../assets/listeInve.svg \"></ion-icon>\r\n              <ion-label>Liste des inventaire</ion-label>\r\n           \r\n          </ion-segment-button>\r\n         \r\n        </ion-segment>\r\n<ion-content *ngIf=\"selectedSegement == 'CreateInv'\">\r\n\r\n  \r\n\r\n\r\n  <app-create-inv *ngIf=\"hideMe\"></app-create-inv>\r\n\r\n  <app-generate-inv *ngIf=\"!hideMe\"></app-generate-inv>\r\n\r\n\r\n \r\n\r\n\r\n  </ion-content>\r\n\r\n  <ion-content *ngIf=\"selectedSegement == 'listInventaire'\">\r\n\r\n    <app-inventaire-list></app-inventaire-list>\r\n  </ion-content>\r\n    \r\n\r\n\r\n\r\n");

/***/ }),

/***/ "Zx7E":
/*!***********************************************!*\
  !*** ./src/app/inventaire/inventaire.page.ts ***!
  \***********************************************/
/*! exports provided: InventairePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventairePage", function() { return InventairePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventaire_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventaire.page.html */ "VS4q");
/* harmony import */ var _inventaire_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventaire.page.scss */ "rBqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! read-excel-file */ "bBMC");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crud.service */ "1vsn");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let InventairePage = class InventairePage {
    constructor(toastController, platform, modalController, crud) {
        this.toastController = toastController;
        this.platform = platform;
        this.modalController = modalController;
        this.crud = crud;
        this.hideMe = true;
        this.titre = "";
        this.date = null;
        this.type = "";
        this.inventaireTab = [];
        this.crud.databaseConn();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.crud.getAllInvent();
    }
    error(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                color: 'danger',
            });
            toast.present();
        });
    }
    succes(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                color: 'success',
            });
            toast.present();
        });
    }
    hide() {
        this.hideMe = true;
    }
    excelRead(e, elem) {
        let fileReaded;
        fileReaded = e.target.files[0];
        let type = e.target.files[0].name.split('.').pop();
        const schema = {
            'Material': {
                prop: 'material',
                type: String,
                required: false
            },
            'Description': {
                prop: 'description',
                type: String,
                required: false
            },
            'Emplacement': {
                prop: 'emplacement',
                type: String,
                required: false
            },
            'Physique': {
                prop: 'physique',
                type: Number,
                required: false
            },
            'Sap': {
                prop: 'sap',
                type: Number,
                required: false
            },
            'Ecart': {
                prop: 'ecart',
                type: Number,
                required: false
            },
            'Cagette': {
                prop: 'cagette',
                type: String,
                required: false
            },
        };
        Object(read_excel_file__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target.files[0], { schema }).then((data) => {
            if (data.rows) {
                for (let i of data.rows) {
                    this.inventaireTab.push(i);
                }
            }
            //  for ( let i of this.inventaireTab){
            // if(this.inventaireTab[i].physique <= this.inventaireTab[i].sap){
            //   console.log(this.inventaireTab[i].physique);
            //}
            // else{
            // console.log("its true")
            //}
            //  }
            for (let i = 0; i < this.inventaireTab.length; i++) {
                if (this.inventaireTab[i].physique < this.inventaireTab[i].sap) {
                    console.log("trop");
                }
                else {
                    console.log("c est bien");
                }
            }
        });
    }
};
InventairePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }
];
InventairePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventaire',
        template: _raw_loader_inventaire_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventaire_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InventairePage);



/***/ }),

/***/ "jiVj":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  --background: #3D5A68;\n}\n\nion-footer ion-toolbar {\n  padding-top: 4px;\n  text-align: -webkit-center;\n  --background:#3D5A68;\n}\n\nion-footer .qr {\n  color: #FFFFFF;\n  width: 10px !important;\n  font-family: acrom;\n  font-size: 10px;\n}\n\nion-footer ion-fab-button {\n  border-radius: 50%;\n  border: 3px solid #344C57;\n  box-shadow: 0 0 0 3px  #668391;\n  --background:linear-gradient(#FFB701,#FF9302);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxxQkFBYztBQUZsQjs7QUFBQTtFQUlNLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsb0JBQWE7QUFBbkI7O0FBTkE7RUFVTSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBQXJCOztBQWJBO0VBbUJLLGtCQUFrQjtFQUVsQix5QkFBeUI7RUFDeEIsOEJBQThCO0VBQzlCLDZDQUFhO0FBSG5CIiwiZmlsZSI6ImZvb3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1mb290ZXJ7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kIDogIzNENUE2ODtcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiMzRDVBNjg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xcntcclxuICAgICAgY29sb3I6I0ZGRkZGRiA7XHJcbiAgICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICBcclxuICBcclxuICAgIGlvbi1mYWItYnV0dG9ue1xyXG4gIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBcclxuICAgICBib3JkZXI6IDNweCBzb2xpZCAjMzQ0QzU3O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggICM2NjgzOTE7XHJcbiAgICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoI0ZGQjcwMSwjRkY5MzAyKTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "rBqo":
/*!*************************************************!*\
  !*** ./src/app/inventaire/inventaire.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'acrom';\n  src: url('Acrom-Medium.ttf');\n}\n\nion-item {\n  --overflow: hidden;\n}\n\nion-segment {\n  height: 48px;\n  --overflow: hidden;\n}\n\n.md .custom-icon {\n  --indicator-color: lightgray;\n  padding: 13px;\n}\n\n.md .segment-icon {\n  --background-hover: rgba(59, 89, 153, 0.04);\n  --color-activated: #3b5999;\n  --color-checked: #3b5999;\n}\n\n.md .segment-slack {\n  --background-hover: rgba(58, 175, 133, 0.04);\n  --color-activated: #3aaf85;\n  --color-checked: #3aaf85;\n}\n\n.custom-icon ion-icon {\n  font-size: 25px;\n}\n\nion-label {\n  font-family: acrom;\n}\n\nion-card-header ion-card-subtitle {\n  color: #B2C4CC;\n  font-size: 12px;\n}\n\nion-card-header ion-label {\n  color: #3D5A68;\n  font-size: 16px;\n}\n\nion-segment {\n  --overflow: hidden;\n}\n\nion-segment ion-label {\n  font-size: 12px;\n  text-transform: none;\n}\n\nion-segment-button ion-label {\n  font-size: 12px;\n}\n\n.upload {\n  --background: #3D5A68;\n  width: 210px;\n  height: 50px;\n  font-size: 12px;\n  border-radius: 7px;\n}\n\n.upload ion-label {\n  font-family: acrom;\n}\n\n.upload ion-icon {\n  font-size: 310px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludmVudGFpcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLDRCQUErQztBQUNuRDs7QUFPSTtFQUVJLGtCQUFXO0FBTG5COztBQU9JO0VBRUEsWUFBWTtFQUVSLGtCQUFXO0FBTm5COztBQWNBO0VBQ0ksNEJBQWtCO0VBQ2xCLGFBQWM7QUFYbEI7O0FBY0U7RUFDRSwyQ0FBbUI7RUFDbkIsMEJBQWtCO0VBQ2xCLHdCQUFnQjtBQVhwQjs7QUFlSTtFQUNBLDRDQUFtQjtFQUNuQiwwQkFBa0I7RUFDbEIsd0JBQWdCO0FBWnBCOztBQWtCRTtFQUNFLGVBQWU7QUFmbkI7O0FBb0JJO0VBQ0ksa0JBQWtCO0FBakIxQjs7QUFvQkk7RUFJUSxjQUFjO0VBQ2QsZUFBZTtBQXBCM0I7O0FBZUk7RUFRUSxjQUFjO0VBQ2QsZUFBZ0I7QUFuQjVCOztBQXlCSTtFQUNJLGtCQUFXO0FBdEJuQjs7QUFxQkk7RUFHUSxlQUFjO0VBQ2Qsb0JBQXFCO0FBcEJqQzs7QUF1Qkk7RUFFUSxlQUFlO0FBckIzQjs7QUEyQkE7RUFDSSxxQkFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQXhCdEI7O0FBbUJBO0VBT1Esa0JBQWtCO0FBdEIxQjs7QUFlQTtFQVVRLGdCQUFnQjtBQXJCeEIiLCJmaWxlIjoiaW52ZW50YWlyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYWNyb20nO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BY3JvbS1NZWRpdW0udHRmJyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuIFxyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgIFxyXG4gICAgICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50e1xyXG4gICAgICAgIFxyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgICAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICBcclxuICBcclxuXHJcbi5tZCAuY3VzdG9tLWljb24ge1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmcgOjEzcHggO1xyXG4gIH1cclxuICBcclxuICAubWQgLnNlZ21lbnQtaWNvbiB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoNTksIDg5LCAxNTMsIDAuMDQpO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzYjU5OTk7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMzYjU5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICAgLm1kIC5zZWdtZW50LXNsYWNrIHtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSg1OCwgMTc1LCAxMzMsIDAuMDQpO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzYWFmODU7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMzYWFmODU7XHJcbiAgfVxyXG4gXHJcblxyXG4gXHJcbiAgXHJcbiAgLmN1c3RvbS1pY29uIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVye1xyXG5cclxuXHJcbiAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQjJDNENDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICMzRDVBNjg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLXNlZ21lbnR7XHJcbiAgICAgICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtIDpub25lIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4udXBsb2Fke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM0Q1QTY4O1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgIH1cclxuICAgIGlvbi1pY29ueyBcclxuICAgICAgICBmb250LXNpemU6IDMxMHB4O1xyXG4gICAgfVxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "tMXm":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-scan/product-scan.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n    <ion-row>\n        <ion-col size=\"2\">\n            <i class=\"fa fa-arrow-left fa-2x\" (click)=\"dismiss()\">\n  </i>\n        </ion-col>\n        <ion-col>\n            Details de produit\n\n        </ion-col>\n    </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n    <ion-item-group>\n        <ion-card>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <i class=\"fas fa-circle icon-lbl\">\n            </i>\n                        <ion-label> material</ion-label>\n                        <ion-label>{{item.material}} </ion-label>\n                    </ion-item>\n\n                </ion-col>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <i class=\"fas fa-circle icon-lbl\">\n            </i>\n                        <ion-label> Description</ion-label>\n                        <ion-label>{{item.description}} </ion-label>\n                    </ion-item>\n\n                </ion-col>\n                <ion-col size=\"12\">\n                    <ion-item>\n\n                        <ion-label> Quantité</ion-label>\n                        <ion-input [(ngModel)]=\"qphysique\" (ngModelChange)=\"setQuantite($evenement)\" type=\"number\"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n                <ion-col size=\"12\">\n                    <ion-item>\n\n                        <ion-label> Description</ion-label>\n                        <ion-label>{{item.stock_id}} </ion-label>\n                    </ion-item>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n\n            <ion-row>\n                <ion-button (click)=\"saveQantite(item.stock_id ,Qphysique);\">enregistrer </ion-button>\n                <ion-button (click)=\"dismiss()\">enregistrer </ion-button>\n\n            </ion-row>\n        </ion-card>\n\n    </ion-item-group>\n\n</ion-content>");

/***/ }),

/***/ "vKMn":
/*!********************************************************!*\
  !*** ./src/app/product-scan/product-scan.component.ts ***!
  \********************************************************/
/*! exports provided: ProductScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductScanComponent", function() { return ProductScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_scan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-scan.component.html */ "tMXm");
/* harmony import */ var _product_scan_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-scan.component.scss */ "SQkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crud.service */ "1vsn");







let ProductScanComponent = class ProductScanComponent {
    constructor(navParams, router, toastController, alertController, modalController, crud, activatedRoute) {
        this.navParams = navParams;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.crud = crud;
        this.activatedRoute = activatedRoute;
        this.qphysique = null;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.item = this.navParams.get('item');
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    saveQantite(id, qphysique) {
        this.crud.addQuantite(id, qphysique).then(() => {
            this.dismiss();
        });
    }
    setQuantite(qt) {
        this.qphysique = qt;
    }
};
ProductScanComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ProductScanComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductScanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-scan',
        template: _raw_loader_product_scan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_scan_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductScanComponent);



/***/ })

}]);
//# sourceMappingURL=default~inventaire-inventaire-module~menu-menu-module-es2015.js.map