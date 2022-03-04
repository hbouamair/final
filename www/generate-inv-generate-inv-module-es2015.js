(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-inv-generate-inv-module"],{

/***/ "84+L":
/*!*************************************************************!*\
  !*** ./src/app/generate-inv/generate-inv-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GenerateInvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvPageRoutingModule", function() { return GenerateInvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _generate_inv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-inv.page */ "j8j1");




const routes = [
    {
        path: '',
        component: _generate_inv_page__WEBPACK_IMPORTED_MODULE_3__["GenerateInvPage"]
    }
];
let GenerateInvPageRoutingModule = class GenerateInvPageRoutingModule {
};
GenerateInvPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GenerateInvPageRoutingModule);



/***/ }),

/***/ "vkzt":
/*!*****************************************************!*\
  !*** ./src/app/generate-inv/generate-inv.module.ts ***!
  \*****************************************************/
/*! exports provided: GenerateInvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvPageModule", function() { return GenerateInvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _generate_inv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-inv-routing.module */ "84+L");
/* harmony import */ var _generate_inv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generate-inv.page */ "j8j1");







let GenerateInvPageModule = class GenerateInvPageModule {
};
GenerateInvPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _generate_inv_routing_module__WEBPACK_IMPORTED_MODULE_5__["GenerateInvPageRoutingModule"]
        ],
        declarations: [_generate_inv_page__WEBPACK_IMPORTED_MODULE_6__["GenerateInvPage"]]
    })
], GenerateInvPageModule);



/***/ })

}]);
//# sourceMappingURL=generate-inv-generate-inv-module-es2015.js.map