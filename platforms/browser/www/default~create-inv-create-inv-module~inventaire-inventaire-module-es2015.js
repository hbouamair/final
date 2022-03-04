(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-inv-create-inv-module~inventaire-inventaire-module"],{

/***/ "M1gX":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-inv/create-inv.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"create\" class=\" add-inv ion-padding\">\n\n\n    <ion-item>\n        <ion-label position=\"floating\">Titre</ion-label>\n        <ion-input [(ngModel)]=\"titre\" type=\"text\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label position=\"floating\">Date</ion-label>\n        <ion-datetime [(ngModel)]=\"date\" displayFormat=\"MM/DD/YYYY\" min=\"2000-03-14\" max=\"2030-12-09\" value=\"2002-09-23T15:03:46.789\">\n            <ion-icon slot=\"end\" name=\"calendar\"></ion-icon>\n        </ion-datetime>\n\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label position=\"floating\">Type</ion-label>\n        <ion-select [(ngModel)]=\"type\" value=\"plannifié\">\n            <ion-select-option value=\"plannifié\">Plannifié</ion-select-option>\n            <ion-select-option value=\"termine\">Terminé</ion-select-option>\n            <ion-select-option value=\"attente\">en attente</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n\n\n    <ion-button class=\"btn-valid\" (click)=\"createInv()\">Valider</ion-button>\n\n\n</ion-content>\n\n<ion-content *ngIf=\"!create\">\n\n    <ion-card>\n        <ion-card-header>\n            <ion-row>\n\n                <ion-col>\n                    <ion-card-subtitle>Reference\n\n                    </ion-card-subtitle>\n                    <ion-label> </ion-label>\n\n                </ion-col>\n                <ion-col>\n                    <ion-card-subtitle>Type\n\n                    </ion-card-subtitle>\n                    <ion-label slot=\"end\"> </ion-label>\n\n                </ion-col>\n            </ion-row>\n        </ion-card-header>\n\n        <ion-card-content>\n\n\n            <ion-button class=\"upload\" (click)=\"connect()\">\n                <ion-label>Choisir un fichier &nbsp;</ion-label>\n                <ion-icon src=\"../../assets/ms-excel.svg\"></ion-icon>\n\n            </ion-button>\n\n            <ion-list>\n                <ion-radio-group *ngFor=\"let item of items\" (ionChange)=\"radioGroupChange($event)\" [(ngModel)]=\"selectedValue\">\n                    <ion-item (ionSelect)=\"radioSelect($event)\">\n                        <ion-label>{{item.name}}</ion-label>\n                        <ion-label class=\"date_modif\">{{item.modifiedDate | date: 'dd/MM/yyyy hh:mm:ss' }}</ion-label>\n                        <ion-radio slot=\"start\" color=\"success\" (ionSelect)=\"select(item)\" [value]=\"item\"></ion-radio>\n                    </ion-item>\n\n\n                </ion-radio-group>\n\n                <ion-button (click)=\"upload()\">Valider</ion-button>\n            </ion-list>\n\n\n\n\n\n\n\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>");

/***/ }),

/***/ "j0MG":
/*!***********************************************!*\
  !*** ./src/app/create-inv/create-inv.page.ts ***!
  \***********************************************/
/*! exports provided: CreateInvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvPage", function() { return CreateInvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_inv_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-inv.page.html */ "M1gX");
/* harmony import */ var _create_inv_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-inv.page.scss */ "mkRS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "1vsn");
/* harmony import */ var _awesome_cordova_plugins_ftp_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/ftp/ngx */ "HJYT");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/environment */ "jsjn");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











let CreateInvPage = class CreateInvPage {
    constructor(crud, fTP, modalController, toastController, file, androidPermissions, filePath, zone) {
        this.crud = crud;
        this.fTP = fTP;
        this.modalController = modalController;
        this.toastController = toastController;
        this.file = file;
        this.androidPermissions = androidPermissions;
        this.filePath = filePath;
        this.zone = zone;
        this.FTP_UPLOAD_PATH_NAME = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].FTP_UPLOAD_PATH_NAME;
        this.FTP_HOST = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].FTP_HOST;
        this.FTP_USER = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].FTP_USER;
        this.FTP_PASSWORD = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].FTP_PASSWORD;
        this.FTP_DOWNLOAD_PATH = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].FTP_DOWNLOAD_PATH;
        this.DOWNLOAD_PATH = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].DOWNLOAD_PATH;
        this.titre = "";
        this.type = "";
        this.create = true;
        this.storagePermissionCheck();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.crud.getAllInvent();
    }
    openFileSelector() {
    }
    storagePermissionCheck() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {
            if (!result.hasPermission) {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
            }
        }, err => {
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        });
    }
    createInv() {
        this.crud.addInventai(this.titre, this.date, this.type);
        this.create = false;
    }
    getInventaire() {
    }
    connect() {
        return this.fTP.connect('ftp.more-software.com', 'moreftp@more-software.com', 'MorservsWMS2022%').then(() => {
            this.fTP.ls('/Wms').then((res) => {
                this.items = [];
                if (res) {
                    for (let i in res) {
                        this.items.push(res[i]);
                    }
                }
                else {
                    this.error('no file !!');
                }
            });
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
    radioSelect(item) {
        console.log("SELECTED! " + item.name);
    }
    upload() {
        let localPath = +this.file.dataDirectory + '/' + this.selectedValue.name;
        this.file.createFile(localPath, 'test.xls', false);
        this.fTP.download(localPath, '/Wms/' + this.selectedValue.name).subscribe((result) => {
            console.log(result);
        }, (error) => {
            console.log(JSON.stringify(error));
        });
    }
    radioGroupChange(event) {
        console.log("radioGroupChange", this.selectedValue.name);
    }
};
CreateInvPage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _awesome_cordova_plugins_ftp_ngx__WEBPACK_IMPORTED_MODULE_5__["FTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
CreateInvPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-inv',
        template: _raw_loader_create_inv_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_inv_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateInvPage);



/***/ }),

/***/ "jsjn":
/*!***********************************!*\
  !*** ./src/config/environment.ts ***!
  \***********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    FTP_UPLOAD_PATH_NAME: "/Wms/",
    FTP_HOST: "ftp.more-software.com",
    FTP_USER: "moreftp@more-software.com",
    FTP_PASSWORD: "MorservsWMS2022%",
    FTP_DOWNLOAD_PATH: "/Wms/",
    DOWNLOAD_PATH: "Download/"
};


/***/ }),

/***/ "mkRS":
/*!*************************************************!*\
  !*** ./src/app/create-inv/create-inv.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'acrom';\n  src: url('Acrom-Medium.ttf');\n}\n\n.add-inv {\n  margin: auto;\n  font-family: acrom;\n}\n\n.add-inv ion-item {\n  border: 1px solid #DCE8EE;\n  margin: 12px;\n  border-radius: 10px;\n}\n\n.add-inv ion-label {\n  font-family: acrom;\n  color: #B2C4CC;\n  font-size: 14px;\n}\n\n.add-inv ion-select {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv ion-input {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv ion-datetime {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv .btn-valid {\n  font-family: acrom;\n  color: #FFFF;\n  font-size: 14px;\n  --background: #3D5A68;\n  float: right;\n}\n\nion-card-header ion-card-subtitle {\n  color: #B2C4CC;\n  font-size: 12px;\n}\n\nion-card-header ion-label {\n  color: #3D5A68;\n  font-size: 16px;\n}\n\n.upload {\n  --background: #3D5A68;\n  width: 220px;\n  height: 50px;\n  font-size: 12px;\n  border-radius: 7px;\n}\n\n.upload ion-label {\n  font-family: acrom;\n}\n\n.upload ion-icon {\n  font-size: 300px;\n}\n\n.date_modif {\n  font-size: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1pbnYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLDRCQUErQztBQUNuRDs7QUFFQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7QUFDdEI7O0FBSEE7RUFJUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUczQjs7QUFUQTtFQVNRLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUl2Qjs7QUFmQTtFQWNRLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUt2Qjs7QUFyQkE7RUFtQlEsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBTXZCOztBQTNCQTtFQXdCUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFPdkI7O0FBakNBO0VBNkJRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFhO0VBQ2IsWUFBWTtBQVFwQjs7QUFKQTtFQUVRLGNBQWM7RUFDZCxlQUFlO0FBTXZCOztBQVRBO0VBTVEsY0FBYztFQUNkLGVBQWU7QUFPdkI7O0FBSEE7RUFDSSxxQkFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQU10Qjs7QUFYQTtFQU9RLGtCQUFrQjtBQVExQjs7QUFmQTtFQVVRLGdCQUFnQjtBQVN4Qjs7QUFMQTtFQUNJLGNBQWM7QUFRbEIiLCJmaWxlIjoiY3JlYXRlLWludi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYWNyb20nO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BY3JvbS1NZWRpdW0udHRmJyk7XHJcbn1cclxuXHJcbi5hZGQtaW52IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRENFOEVFO1xyXG4gICAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6ICNCMkM0Q0M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5idG4tdmFsaWQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjogI0ZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzNENUE2ODtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNCMkM0Q0M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51cGxvYWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM0Q1QTY4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICB9XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGVfbW9kaWYge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~create-inv-create-inv-module~inventaire-inventaire-module-es2015.js.map