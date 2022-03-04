(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emplacement-emplacement-module"], {
    /***/
    "5HZ3":
    /*!***********************************************************!*\
      !*** ./src/app/emplacement/emplacement-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: EmplacementPageRoutingModule */

    /***/
    function HZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmplacementPageRoutingModule", function () {
        return EmplacementPageRoutingModule;
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


      var _emplacement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./emplacement.page */
      "zd4w");

      var routes = [{
        path: '',
        component: _emplacement_page__WEBPACK_IMPORTED_MODULE_3__["EmplacementPage"]
      }];

      var EmplacementPageRoutingModule = function EmplacementPageRoutingModule() {
        _classCallCheck(this, EmplacementPageRoutingModule);
      };

      EmplacementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmplacementPageRoutingModule);
      /***/
    },

    /***/
    "duei":
    /*!***************************************************!*\
      !*** ./src/app/emplacement/emplacement.module.ts ***!
      \***************************************************/

    /*! exports provided: EmplacementPageModule */

    /***/
    function duei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmplacementPageModule", function () {
        return EmplacementPageModule;
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


      var _emplacement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./emplacement-routing.module */
      "5HZ3");
      /* harmony import */


      var _emplacement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./emplacement.page */
      "zd4w");

      var EmplacementPageModule = function EmplacementPageModule() {
        _classCallCheck(this, EmplacementPageModule);
      };

      EmplacementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _emplacement_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmplacementPageRoutingModule"]],
        declarations: [_emplacement_page__WEBPACK_IMPORTED_MODULE_6__["EmplacementPage"]]
      })], EmplacementPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=emplacement-emplacement-module-es5.js.map