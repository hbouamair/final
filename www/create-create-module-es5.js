(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-create-module"], {
    /***/
    "4TXq":
    /*!*****************************************!*\
      !*** ./src/app/create/create.module.ts ***!
      \*****************************************/

    /*! exports provided: CreatePageModule */

    /***/
    function TXq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePageModule", function () {
        return CreatePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-routing.module */
      "mpgD");
      /* harmony import */


      var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create.page */
      "xrCV");

      var CreatePageModule = function CreatePageModule() {
        _classCallCheck(this, CreatePageModule);
      };

      CreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"]],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
      })], CreatePageModule);
      /***/
    },

    /***/
    "mpgD":
    /*!*************************************************!*\
      !*** ./src/app/create/create-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: CreatePageRoutingModule */

    /***/
    function mpgD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function () {
        return CreatePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create.page */
      "xrCV");

      var routes = [{
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
      }];

      var CreatePageRoutingModule = function CreatePageRoutingModule() {
        _classCallCheck(this, CreatePageRoutingModule);
      };

      CreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreatePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-create-module-es5.js.map