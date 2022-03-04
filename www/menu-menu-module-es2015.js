(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "ylOD");
/* harmony import */ var _inventaire_inventaire_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inventaire/inventaire.page */ "Zx7E");
/* harmony import */ var _users_users_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users/users.page */ "x3UY");
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.page */ "A7BC");
/* harmony import */ var _create_create_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/create.page */ "xrCV");
/* harmony import */ var _emplacement_emplacement_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../emplacement/emplacement.page */ "zd4w");
/* harmony import */ var _stock_stock_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stock/stock.page */ "ridy");













let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"], _users_users_page__WEBPACK_IMPORTED_MODULE_8__["UsersPage"], _inventaire_inventaire_page__WEBPACK_IMPORTED_MODULE_7__["InventairePage"], _footer_footer_page__WEBPACK_IMPORTED_MODULE_9__["FooterPage"], _create_create_page__WEBPACK_IMPORTED_MODULE_10__["CreatePage"], _emplacement_emplacement_page__WEBPACK_IMPORTED_MODULE_11__["EmplacementPage"], _stock_stock_page__WEBPACK_IMPORTED_MODULE_12__["StockPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n\n    <ion-row>\n\n      <ion-col size=\"2\" ><ion-item lines=\"none\">\n    <ion-icon  src=\"../../assets/mdicons/md-home.svg\"> </ion-icon> \n   </ion-item>\n  </ion-col>\n\n  <ion-col size=\"6\">\n    \n    <ion-item  class=\"bord\" lines=\"none\">\n    \n    <ion-icon class=\"pers\" name=\"person\"> </ion-icon>\n    <ion-title>Talberani</ion-title></ion-item>\n  </ion-col>\n\n\n  <ion-col >\n    <ion-item class=\"bord\"  lines=\"none\">\n      \n    <ion-icon  src=\"../../assets/mdicons/Settings.svg\"> </ion-icon></ion-item>\n  </ion-col>\n\n  <ion-col>\n    <ion-item  class=\"bord\" lines=\"none\">\n      \n    <ion-icon (click)=\"logout()\" src=\"../../assets/mdicons/Logout.svg\"> </ion-icon></ion-item>\n  </ion-col>\n\n\n\n\n\n  </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"menu-top\">\n<ion-item  lines=\"none\">\n  <ion-segment [(ngModel)]=\"selectedSegement\"\n  (ionChange)=\"segmentChanged($event)\"\n  class=\"menu ion-padding\" value=\"users\">\n    <ion-segment-button value=\"products\">\n      \n      <ion-icon class=\"icon-menu\" src=\"../../assets/mdicons/md-prod.svg\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"emplacement\">\n     \n      <ion-icon class=\"icon-menu\" src=\"../../assets/mdicons/md-emp.svg\" ></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"users\">\n      \n      <ion-icon class=\"icon-menu\" src=\"../../assets/mdicons/md-us.svg\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"inventaire\">\n      \n      <ion-icon class=\"icon-menu\" src=\"../../assets/mdicons/md-inv.svg\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"stock\">\n\n      <ion-icon class=\"icon-menu\" src=\"../../assets/mdicons/md-stock.svg\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-item>\n\n\n<ion-content class=\"page-upload ion-padding\" *ngIf=\"selectedSegement == 'inventaire'\" >\n\n<app-inventaire></app-inventaire>\n\n</ion-content>\n\n<ion-content *ngIf=\"selectedSegement == 'users'\">\n\n  <app-users></app-users>\n  \n  \n  \n\n</ion-content>\n\n\n\n<ion-content *ngIf=\"selectedSegement == 'products'\">\n\n  <app-create></app-create>\n  \n  \n  \n\n</ion-content>\n<ion-content *ngIf=\"selectedSegement == 'emplacement'\">\n\n  <app-emplacement></app-emplacement>\n  \n</ion-content>\n<ion-content *ngIf=\"selectedSegement == 'stock'\">\n\n  <app-stock></app-stock>\n  \n</ion-content>\n\n</ion-content>\n\n\n\n<app-footer class=\"footer\"></app-footer>\n");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'acrom';\n  src: url('Acrom-Medium.ttf');\n}\n\n.menu-top {\n  --overflow: hidden;\n}\n\n.menu-top ion-segment {\n  --background:#F7F7F7 ;\n}\n\n.menu-top ion-content {\n  --overflow: hidden;\n}\n\nion-header ion-toolbar {\n  --background: #3D5A68;\n}\n\nion-header ion-item {\n  --background: #3D5A68;\n}\n\nion-header ion-item ion-title {\n  color: #FFFFFF;\n  font-family: acrom;\n  font-size: 15px;\n}\n\nion-header ion-icon {\n  font-size: 18px;\n  color: #FFFFFF;\n}\n\n.menu ion-segment-button {\n  min-width: 65px !important;\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  --border-radius: 50%;\n  --color-checked:#FFFF ;\n  --background-checked: #3D5A68 ;\n}\n\n.menu ion-segment-button .icon-menu:hover {\n  fill: #ffff;\n}\n\n.menu ion-icon {\n  font-size: 30px;\n  fill: #B2B9BC;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLDRCQUErQztBQUNuRDs7QUFHQTtFQUNJLGtCQUFXO0FBQWY7O0FBREE7RUFLUSxxQkFBYztBQUF0Qjs7QUFMQTtFQVFRLGtCQUFXO0FBQ25COztBQU1BO0VBRVEscUJBQWM7QUFKdEI7O0FBRUE7RUFTUSxxQkFBYztBQVB0Qjs7QUFGQTtFQVdZLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBYztBQUwxQjs7QUFSQTtFQWlCUSxlQUFlO0VBQ2YsY0FBYztBQUx0Qjs7QUFXQTtFQUdRLDBCQUEwQjtFQUMxQix5Q0FBa0I7RUFDbEIsaURBQTBCO0VBQzFCLG9CQUFnQjtFQUNoQixzQkFBaUI7RUFDakIsOEJBQXNCO0FBVjlCOztBQUVBO0VBVVksV0FBVztBQVJ2Qjs7QUFGQTtFQWlCVSxlQUFlO0VBRWIsYUFBYTtBQVp6QiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhY3JvbSc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0Fjcm9tLU1lZGl1bS50dGYnKTtcclxuICB9XHJcbiAgXHJcblxyXG4ubWVudS10b3B7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgIFxyXG4gICAgXHJcbiAgICBpb24tc2VnbWVudHtcclxuICAgICAgICAtLWJhY2tncm91bmQgOiNGN0Y3RjcgO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgIC0tYmFja2dyb3VuZCA6ICMzRDVBNjg7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAtLWJhY2tncm91bmQgOiAjM0Q1QTY4O1xyXG4gICAgICAgIGlvbi10aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWljb257IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjojRkZGRkZGIDtcclxuICAgIH1cclxuICAgXHJcblxyXG59XHJcblxyXG4ubWVudXtcclxuICBcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZCA6I0ZGRkYgO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkIDogIzNENUE2OCA7XHJcbiAgICAgICAgIC5pY29uLW1lbnU6aG92ZXJ7XHJcbiAgICAgICAgICAgIGZpbGw6ICNmZmZmO1xyXG5cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpbGw6ICNCMkI5QkM7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG5cclxuIFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "ylOD");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.router.navigate(['/login']);
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map