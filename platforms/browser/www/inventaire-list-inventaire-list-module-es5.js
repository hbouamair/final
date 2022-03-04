(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventaire-list-inventaire-list-module"], {
    /***/
    "/M43":
    /*!*******************************************************************!*\
      !*** ./src/app/inventaire-list/inventaire-list-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InventaireListPageRoutingModule */

    /***/
    function M43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventaireListPageRoutingModule", function () {
        return InventaireListPageRoutingModule;
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


      var _inventaire_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventaire-list.page */
      "FUI7");

      var routes = [{
        path: '',
        component: _inventaire_list_page__WEBPACK_IMPORTED_MODULE_3__["InventaireListPage"]
      }];

      var InventaireListPageRoutingModule = function InventaireListPageRoutingModule() {
        _classCallCheck(this, InventaireListPageRoutingModule);
      };

      InventaireListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventaireListPageRoutingModule);
      /***/
    },

    /***/
    "bJG9":
    /*!***********************************************************!*\
      !*** ./src/app/inventaire-list/inventaire-list.module.ts ***!
      \***********************************************************/

    /*! exports provided: InventaireListPageModule */

    /***/
    function bJG9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventaireListPageModule", function () {
        return InventaireListPageModule;
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


      var _inventaire_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inventaire-list-routing.module */
      "/M43");
      /* harmony import */


      var _inventaire_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventaire-list.page */
      "FUI7");

      var InventaireListPageModule = function InventaireListPageModule() {
        _classCallCheck(this, InventaireListPageModule);
      };

      InventaireListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventaire_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventaireListPageRoutingModule"]],
        declarations: [_inventaire_list_page__WEBPACK_IMPORTED_MODULE_6__["InventaireListPage"]]
      })], InventaireListPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=inventaire-list-inventaire-list-module-es5.js.map