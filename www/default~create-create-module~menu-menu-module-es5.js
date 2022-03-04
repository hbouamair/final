(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-create-module~menu-menu-module"], {
    /***/
    "4vh3":
    /*!*****************************************!*\
      !*** ./src/app/create/create.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function vh3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: 'acrom';\n  src: url('Acrom-Medium.ttf');\n}\n\nion-content {\n  --overflow: hidden;\n}\n\nion-card {\n  border-radius: 14px;\n}\n\nion-card ion-label {\n  font-family: acrom;\n  color: #3D5A68;\n}\n\nion-label {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 13px;\n}\n\n.titre ion-label {\n  font-size: 11px;\n  font-family: acrom;\n  color: #FF9302;\n}\n\n.icon {\n  text-align: center;\n}\n\n.icon ion-item {\n  --background: #E6ECEF;\n  text-align: center;\n}\n\n.add-inv {\n  margin: auto;\n  font-family: acrom;\n}\n\n.add-inv ion-item {\n  border: 1px solid #DCE8EE;\n  margin: 12px;\n  border-radius: 10px;\n}\n\n.add-inv ion-label {\n  font-family: acrom;\n  color: #B2C4CC;\n  font-size: 14px;\n}\n\n.add-inv ion-select {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv ion-input {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv ion-datetime {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv .btn-valid {\n  font-family: acrom;\n  color: #FFFF;\n  font-size: 14px;\n  --background: #3D5A68 ;\n  float: right;\n}\n\n.icons-buttom ion-row {\n  --background-color: #B2C4CC ;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  float: right;\n}\n\n.icons-buttom ion-row ion-col {\n  align-items: center;\n  text-align: -webkit-center;\n  margin: 15px;\n}\n\n.icons-buttom ion-row ion-fab-button {\n  --background: #3D5A68;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFDcEIsNEJBQStDO0FBQ25EOztBQUVBO0VBQ0ksa0JBQVc7QUFDZjs7QUFFQTtFQUNJLG1CQUFxQjtBQUN6Qjs7QUFGQTtFQUdRLGtCQUFrQjtFQUN0QixjQUFlO0FBR25COztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWU7RUFDZixlQUFnQjtBQUNwQjs7QUFHQTtFQUVRLGVBQWlCO0VBQ2pCLGtCQUFvQjtFQUNwQixjQUFnQjtBQUR4Qjs7QUFLQTtFQUNJLGtCQUFtQjtBQUZ2Qjs7QUFDQTtFQUdJLHFCQUFjO0VBQ2Qsa0JBQW9CO0FBQXhCOztBQUdBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtBQUF0Qjs7QUFGQTtFQUtRLHlCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0FBQzNCOztBQVJBO0VBV1Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQ3ZCOztBQWRBO0VBZ0JRLGtCQUFrQjtFQUNsQixjQUFhO0VBQ2IsZUFBZTtBQUV2Qjs7QUFwQkE7RUFzQlEsa0JBQWtCO0VBQ2xCLGNBQWE7RUFDYixlQUFlO0FBRXZCOztBQTFCQTtFQTRCUSxrQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGVBQWU7QUFFdkI7O0FBaENBO0VBa0NRLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFjO0VBQ2QsWUFBWTtBQUVwQjs7QUFHQTtFQUlJLDRCQUFvQjtFQUNwQiw0QkFBOEI7RUFDOUIsNkJBQStCO0VBRS9CLFlBQWE7QUFKakI7O0FBSkE7RUFVUSxtQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLFlBQVk7QUFGcEI7O0FBVkE7RUFlUSxxQkFBYztBQUR0QiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2Fjcm9tJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWNyb20tTWVkaXVtLnR0ZicpO1xyXG4gIH1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTRweCA7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6YWNyb20gO1xyXG4gICAgY29sb3IgOiMzRDVBNjggO1xyXG4gICAgXHJcblxyXG4gICAgfVxyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OmFjcm9tIDtcclxuICAgIGNvbG9yIDojM0Q1QTY4IDtcclxuICAgIGZvbnQtc2l6ZSA6MTNweCA7XHJcbn1cclxuXHJcblxyXG4udGl0cmV7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTFweCA7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgOiBhY3JvbSA7XHJcbiAgICAgICAgY29sb3IgOiAjRkY5MzAyIDtcclxuICAgIH1cclxufVxyXG5cclxuLmljb257XHJcbiAgICB0ZXh0LWFsaWduIDpjZW50ZXIgO1xyXG4gICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZCA6ICNFNkVDRUY7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyIDtcclxuICAgfVxyXG59XHJcbi5hZGQtaW52e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gIFxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkICNEQ0U4RUUgO1xyXG4gICAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6ICNCMkM0Q0M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6IzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjojM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24tZGF0ZXRpbWV7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiMzRDVBNjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5idG4tdmFsaWR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiNGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAtLWJhY2tncm91bmQgOiAjM0Q1QTY4IDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4uaWNvbnMtYnV0dG9te1xyXG4gICBcclxuXHJcbmlvbi1yb3cge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yIDogI0IyQzRDQyA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDogMTVweCA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyA6IDE1cHggO1xyXG5cclxuICAgIGZsb2F0IDpyaWdodCA7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyIDtcclxuICAgICAgICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyIDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7IFxyXG4gICAgfVxyXG4gICAgaW9uLWZhYi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogIzNENUE2ODtcclxuICAgIH1cclxufVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Ccx/":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Ccx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <ion-content class=\"ion-padding\">\r\n        <ion-scroll scrollY=\"true\">\r\n            <ion-card *ngFor=\"let product of crud.Prodcuts\">\r\n                <ion-card-content *ngIf=\"hideMe\">\r\n\r\n                    <ion-row class=\"titre padding\">\r\n                        <ion-col size=\"4\">\r\n                            <ion-label> Material</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"5\">\r\n                            <ion-label> Description</ion-label>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-label>Cagette</ion-label>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row padding>\r\n\r\n                        <ion-col size=\"4\">\r\n                            <ion-label> {{ product.material }}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"5\">\r\n                            <ion-label>{{ product.description }}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-label> {{ product.cagette }}</ion-label>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n\r\n                </ion-card-content>\r\n                <ion-row *ngIf=\"hideMe\" style=\"background:#E6ECEF\" class=\"icon\" padding>\r\n\r\n                    <ion-col>\r\n                        <ion-item [routerLink]=\"['/editProduct/', product.product_id]\" lines=\"none\">\r\n                            <ion-icon name=\"create\"> </ion-icon>\r\n                            <ion-label>Editer </ion-label>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item (click)=\"remove(product.product_id)\" lines=\"none\">\r\n                            <ion-icon name=\"trash\"> </ion-icon>\r\n                            <ion-label>Supprimer </ion-label>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n            </ion-card>\r\n        </ion-scroll>\r\n\r\n        <ion-content *ngIf=\"hideMe\" class=\" icons-buttom ion-padding\">\r\n\r\n            <ion-row>\r\n                <ion-col center>\r\n                    <ion-fab-button (click)=\"hide()\">\r\n                        <ion-icon name=\"add\">\r\n                        </ion-icon>\r\n                    </ion-fab-button>\r\n                    <ion-label>ajouter un produit</ion-label>\r\n\r\n\r\n\r\n                </ion-col>\r\n\r\n\r\n\r\n            </ion-row>\r\n\r\n\r\n\r\n\r\n\r\n        </ion-content>\r\n\r\n\r\n        <ion-content class=\" add-inv ion-padding\">\r\n\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Material</ion-label>\r\n                <ion-input [(ngModel)]=\"material\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Description</ion-label>\r\n                <ion-textarea [(ngModel)]=\"description\" type=\"text\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">cagette</ion-label>\r\n                <ion-input [(ngModel)]=\"cagette\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <ion-content *ngIf=\"!hideMe\" class=\" icons-buttom ion-padding\">\r\n\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-fab-button (click)=\"createProduct()\">\r\n                            <ion-icon name=\"save\">\r\n                            </ion-icon>\r\n                        </ion-fab-button>\r\n                        <ion-label>Enregistrer</ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-fab-button (click)=\"show()\">\r\n                            <ion-icon src=\"../../assets/mdicons/retour.svg\">\r\n                            </ion-icon>\r\n                        </ion-fab-button>\r\n                        <ion-label>retour</ion-label>\r\n\r\n                    </ion-col>\r\n\r\n\r\n                </ion-row>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </ion-content>\r\n\r\n\r\n\r\n        <!-- Create -->";
      /***/
    },

    /***/
    "xrCV":
    /*!***************************************!*\
      !*** ./src/app/create/create.page.ts ***!
      \***************************************/

    /*! exports provided: CreatePage */

    /***/
    function xrCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePage", function () {
        return CreatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create.page.html */
      "Ccx/");
      /* harmony import */


      var _create_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create.page.scss */
      "4vh3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../crud.service */
      "1vsn");
      /* harmony import */


      var _awesome_cordova_plugins_ftp_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/ftp/ngx */
      "HJYT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CreatePage = /*#__PURE__*/function () {
        function CreatePage(crud, fTP, modalController, toastController) {
          _classCallCheck(this, CreatePage);

          this.crud = crud;
          this.fTP = fTP;
          this.modalController = modalController;
          this.toastController = toastController;
          this.material = "";
          this.description = "";
          this.cagette = "";
          this.hideMe = true;
          this.modal = false;
          this.inventaireTab = [];
          this.crud.databaseConn();
        }

        _createClass(CreatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createProduct",
          value: function createProduct() {
            this.crud.addProduct(this.material, this.description, this.cagette);
          }
        }, {
          key: "remove",
          value: function remove(product) {
            this.crud.deleteProduct(product);
          }
        }, {
          key: "hide",
          value: function hide() {
            this.hideMe = false;
          }
        }, {
          key: "show",
          value: function show() {
            this.hideMe = true;
          }
        }]);

        return CreatePage;
      }();

      CreatePage.ctorParameters = function () {
        return [{
          type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]
        }, {
          type: _awesome_cordova_plugins_ftp_ngx__WEBPACK_IMPORTED_MODULE_5__["FTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CreatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~create-create-module~menu-menu-module-es5.js.map