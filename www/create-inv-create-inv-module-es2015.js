(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-inv-create-inv-module"],{

/***/ "jmjz":
/*!*********************************************************!*\
  !*** ./src/app/create-inv/create-inv-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateInvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvPageRoutingModule", function() { return CreateInvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_inv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-inv.page */ "j0MG");




const routes = [
    {
        path: '',
        component: _create_inv_page__WEBPACK_IMPORTED_MODULE_3__["CreateInvPage"]
    }
];
let CreateInvPageRoutingModule = class CreateInvPageRoutingModule {
};
CreateInvPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateInvPageRoutingModule);



/***/ }),

/***/ "xtKe":
/*!*************************************************!*\
  !*** ./src/app/create-inv/create-inv.module.ts ***!
  \*************************************************/
/*! exports provided: CreateInvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvPageModule", function() { return CreateInvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_inv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-inv-routing.module */ "jmjz");
/* harmony import */ var _create_inv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-inv.page */ "j0MG");







let CreateInvPageModule = class CreateInvPageModule {
};
CreateInvPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_inv_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateInvPageRoutingModule"]
        ],
        declarations: [_create_inv_page__WEBPACK_IMPORTED_MODULE_6__["CreateInvPage"]]
    })
], CreateInvPageModule);



/***/ })

}]);
//# sourceMappingURL=create-inv-create-inv-module-es2015.js.map