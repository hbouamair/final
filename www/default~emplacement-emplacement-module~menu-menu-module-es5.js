(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~emplacement-emplacement-module~menu-menu-module"], {
    /***/
    "3P16":
    /*!***************************************************!*\
      !*** ./src/app/emplacement/emplacement.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function P16(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: 'acrom';\n  src: url('Acrom-Medium.ttf');\n}\n\nion-card {\n  border-radius: 14px;\n}\n\nion-card ion-label {\n  font-family: acrom;\n  color: #3D5A68;\n}\n\nion-label {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 13px;\n}\n\n.titre ion-label {\n  font-size: 11px;\n  font-family: acrom;\n  color: #FF9302;\n}\n\n.icon {\n  text-align: center;\n}\n\n.icon ion-item {\n  --background: #E6ECEF;\n  text-align: center;\n}\n\n.add-inv {\n  margin: auto;\n  font-family: acrom;\n}\n\n.add-inv ion-item {\n  border: 1px solid #DCE8EE;\n  margin: 12px;\n  border-radius: 10px;\n}\n\n.add-inv ion-label {\n  font-family: acrom;\n  color: #B2C4CC;\n  font-size: 14px;\n}\n\n.add-inv ion-select {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv ion-input {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv ion-datetime {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n\n.add-inv .btn-valid {\n  font-family: acrom;\n  color: #FFFF;\n  font-size: 14px;\n  --background: #3D5A68;\n  float: right;\n}\n\n.icons-buttom ion-row {\n  --background-color: #B2C4CC;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  float: right;\n}\n\n.icons-buttom ion-row ion-col {\n  align-items: center;\n  text-align: -webkit-center;\n  margin: 15px;\n}\n\n.icons-buttom ion-row ion-fab-button {\n  --background: #3D5A68;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVtcGxhY2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFvQjtFQUNwQiw0QkFBK0M7QUFDbkQ7O0FBSUE7RUFDSSxtQkFBbUI7QUFEdkI7O0FBQUE7RUFHUSxrQkFBa0I7RUFDbEIsY0FBYztBQUN0Qjs7QUFHQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUFuQjs7QUFHQTtFQUVRLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUR0Qjs7QUFLQTtFQUNJLGtCQUFrQjtBQUZ0Qjs7QUFDQTtFQUdRLHFCQUFhO0VBQ2Isa0JBQWtCO0FBQTFCOztBQUlBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtBQUR0Qjs7QUFEQTtFQUlRLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQzNCOztBQVBBO0VBU1Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBRXZCOztBQWJBO0VBY1Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBR3ZCOztBQW5CQTtFQW1CUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFJdkI7O0FBekJBO0VBd0JRLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUt2Qjs7QUEvQkE7RUE2QlEsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQWE7RUFDYixZQUFZO0FBTXBCOztBQUZBO0VBRVEsMkJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsWUFBWTtBQUlwQjs7QUFUQTtFQU9ZLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsWUFBWTtBQU14Qjs7QUFmQTtFQVlZLHFCQUFhO0FBT3pCIiwiZmlsZSI6ImVtcGxhY2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhY3JvbSc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0Fjcm9tLU1lZGl1bS50dGYnKTtcclxufVxyXG5cclxuLnNjcm9sbCB7fVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgY29sb3I6ICMzRDVBNjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi50aXRyZSB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6ICNGRjkzMDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNFNkVDRUY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkLWludiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RDRThFRTtcclxuICAgICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiAjQjJDNENDO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjogIzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjogIzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjogIzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXZhbGlkIHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6ICNGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMzRDVBNjg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbnMtYnV0dG9tIHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0IyQzRDQztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMzRDVBNjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "p0/k":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emplacement/emplacement.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function p0K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"scroll\">\n    <ion-content class=\"ion-padding\">\n        <ion-scroll scrollY=\"true \">\n            <ion-card *ngFor=\"let emplacement of crud.Emplacements\">\n                <ion-card-content *ngIf=\"hideMe\">\n\n                    <ion-row class=\"titre padding\">\n                        <ion-col size=\"4\">\n                            <ion-label> reference</ion-label>\n                        </ion-col>\n                        <ion-col size=\"5\">\n                            <ion-label> rayon</ion-label>\n                        </ion-col>\n                        <ion-col>\n                            <ion-label>qrcode</ion-label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row padding>\n\n                        <ion-col size=\"4\">\n                            <ion-label> {{ emplacement.reference }}</ion-label>\n                        </ion-col>\n                        <ion-col size=\"5\">\n                            <ion-label>{{ emplacement.rayon }}</ion-label>\n                        </ion-col>\n                        <ion-col>\n                            <ion-label> {{ emplacement.qrcode }}</ion-label>\n                        </ion-col>\n                    </ion-row>\n\n\n                </ion-card-content>\n                <ion-row *ngIf=\"hideMe\" style=\"background:#E6ECEF\" class=\"icon\" padding>\n\n                    <ion-col>\n                        <ion-item [routerLink]=\"['/editProduct/', emplacement.id_emplacement]\" lines=\"none\">\n                            <ion-icon name=\"create\"> </ion-icon>\n                            <ion-label>Editer </ion-label>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item (click)=\"remove(emplacement.id_emplacement)\" lines=\"none\">\n                            <ion-icon name=\"trash\"> </ion-icon>\n                            <ion-label>Supprimer </ion-label>\n                        </ion-item>\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n        </ion-scroll>\n\n        <ion-content *ngIf=\"hideMe\" class=\" icons-buttom ion-padding\">\n\n            <ion-row>\n                <ion-col center>\n                    <ion-fab-button (click)=\"hide()\">\n                        <ion-icon name=\"add\">\n                        </ion-icon>\n                    </ion-fab-button>\n                    <ion-label>ajouter un emplacement</ion-label>\n                </ion-col>\n\n\n            </ion-row>\n\n\n\n        </ion-content>\n\n\n        <ion-content *ngIf=\"!hideMe\" class=\"  add-inv ion-padding\">\n            <ion-title>Emplacement</ion-title>\n            <ion-item>\n                <ion-label position=\"floating\">reference</ion-label>\n                <ion-input [(ngModel)]=\"reference\" type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Rayon</ion-label>\n                <ion-input [(ngModel)]=\"rayon\" type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">qrcode</ion-label>\n                <ion-input [(ngModel)]=\"qrcode\" type=\"text\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"!hideMe\" class=\" icons-buttom ion-padding\">\n\n                <ion-row>\n                    <ion-col>\n                        <ion-fab-button (click)=\"createEmplacement()\">\n                            <ion-icon name=\"save\">\n                            </ion-icon>\n                        </ion-fab-button>\n                        <ion-label>Enregistrer</ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <ion-fab-button (click)=\"show()\">\n                            <ion-icon src=\"../../assets/mdicons/retour.svg\">\n                            </ion-icon>\n                        </ion-fab-button>\n                        <ion-label>retour</ion-label>\n\n                    </ion-col>\n\n\n                </ion-row>\n\n\n\n\n\n\n\n            </div>\n        </ion-content>\n\n\n        <!-- Create -->";
      /***/
    },

    /***/
    "zd4w":
    /*!*************************************************!*\
      !*** ./src/app/emplacement/emplacement.page.ts ***!
      \*************************************************/

    /*! exports provided: EmplacementPage */

    /***/
    function zd4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmplacementPage", function () {
        return EmplacementPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_emplacement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./emplacement.page.html */
      "p0/k");
      /* harmony import */


      var _emplacement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./emplacement.page.scss */
      "3P16");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../crud.service */
      "1vsn");

      var EmplacementPage = /*#__PURE__*/function () {
        function EmplacementPage(crud) {
          _classCallCheck(this, EmplacementPage);

          this.crud = crud;
          this.reference = "";
          this.rayon = "";
          this.qrcode = "";
          this.hideMe = true;
          this.crud.databaseConn();
        }

        _createClass(EmplacementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.crud.getAllEmplacement();
          }
        }, {
          key: "createEmplacement",
          value: function createEmplacement() {
            this.crud.addEmplacement(this.reference, this.rayon, this.qrcode);
          }
        }, {
          key: "remove",
          value: function remove(emplacement) {
            this.crud.deleteEmplacement(emplacement);
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

        return EmplacementPage;
      }();

      EmplacementPage.ctorParameters = function () {
        return [{
          type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]
        }];
      };

      EmplacementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-emplacement',
        template: _raw_loader_emplacement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_emplacement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmplacementPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~emplacement-emplacement-module~menu-menu-module-es5.js.map