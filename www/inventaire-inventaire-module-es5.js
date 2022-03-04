(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventaire-inventaire-module"], {
    /***/
    "CJwu":
    /*!*********************************************************!*\
      !*** ./src/app/inventaire/inventaire-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: InventairePageRoutingModule */

    /***/
    function CJwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventairePageRoutingModule", function () {
        return InventairePageRoutingModule;
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


      var _inventaire_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventaire.page */
      "Zx7E");

      var routes = [{
        path: '',
        component: _inventaire_page__WEBPACK_IMPORTED_MODULE_3__["InventairePage"]
      }];

      var InventairePageRoutingModule = function InventairePageRoutingModule() {
        _classCallCheck(this, InventairePageRoutingModule);
      };

      InventairePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventairePageRoutingModule);
      /***/
    },

    /***/
    "qVXu":
    /*!*************************************************!*\
      !*** ./src/app/inventaire/inventaire.module.ts ***!
      \*************************************************/

    /*! exports provided: InventairePageModule */

    /***/
    function qVXu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventairePageModule", function () {
        return InventairePageModule;
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


      var _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inventaire-routing.module */
      "CJwu");
      /* harmony import */


      var _inventaire_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventaire.page */
      "Zx7E");
      /* harmony import */


      var _create_inv_create_inv_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../create-inv/create-inv.page */
      "j0MG");
      /* harmony import */


      var _generate_inv_generate_inv_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../generate-inv/generate-inv.page */
      "j8j1");
      /* harmony import */


      var _inventaire_list_inventaire_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../inventaire-list/inventaire-list.page */
      "FUI7");
      /* harmony import */


      var _footer_footer_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../footer/footer.page */
      "A7BC");

      var InventairePageModule = function InventairePageModule() {
        _classCallCheck(this, InventairePageModule);
      };

      InventairePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventairePageRoutingModule"]],
        declarations: [_inventaire_page__WEBPACK_IMPORTED_MODULE_6__["InventairePage"], _create_inv_create_inv_page__WEBPACK_IMPORTED_MODULE_7__["CreateInvPage"], _generate_inv_generate_inv_page__WEBPACK_IMPORTED_MODULE_8__["GenerateInvPage"], _inventaire_list_inventaire_list_page__WEBPACK_IMPORTED_MODULE_9__["InventaireListPage"], _footer_footer_page__WEBPACK_IMPORTED_MODULE_10__["FooterPage"]]
      })], InventairePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=inventaire-inventaire-module-es5.js.map