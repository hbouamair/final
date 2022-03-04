(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-create-module~create-inv-create-inv-module~edit-edit-module~emplacement-emplacement-m~0482bc81"], {
    /***/
    "1vsn":
    /*!*********************************!*\
      !*** ./src/app/crud.service.ts ***!
      \*********************************/

    /*! exports provided: CrudService */

    /***/
    function vsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrudService", function () {
        return CrudService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      "9lwF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CrudService = /*#__PURE__*/function () {
        function CrudService(platform, sqlite, router) {
          _classCallCheck(this, CrudService);

          this.platform = platform;
          this.sqlite = sqlite;
          this.router = router;
          this.db_name = "remotestack.db";
          this.db_table = "Product";
          this.db_users = "users";
          this.db_emplacement = "emplacement";
          this.db_inventaire = "Inventaire";
          this.db_stock = "Stock";
          this.databaseConn();
        } // Create SQLite database 


        _createClass(CrudService, [{
          key: "databaseConn",
          value: function databaseConn() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.sqlite.create({
                name: _this.db_name,
                location: 'default'
              }).then(function (sqLite) {
                _this.dbInstance = sqLite;
                sqLite.executeSql("\n              CREATE TABLE IF NOT EXISTS ".concat(_this.db_table, " (\n                product_id INTEGER PRIMARY KEY AUTOINCREMENT,\n                material varchar(255),\n                description varchar(255),\n                cagette varchar(255),\n                UNIQUE (material)\n\n              )"), []), sqLite.executeSql("\n              CREATE TABLE IF NOT EXISTS ".concat(_this.db_inventaire, " (\n                id_inventaire INTEGER PRIMARY KEY AUTOINCREMENT,\n                titre varchar(255),\n                date Date ,\n                type varchar(255),\n                UNIQUE (titre)\n\n              )"), []), sqLite.executeSql("\n              CREATE TABLE IF NOT EXISTS ".concat(_this.db_users, " (\n                user_id INTEGER PRIMARY KEY AUTOINCREMENT,\n                nom varchar(255),\n                prenom varchar(255),\n                username varchar(255),\n                email varchar(255),\n                password varchar(255),\n                telephone INTEGER, \n                role INTEGER,\n                UNIQUE (username , email ,telephone)\n\n              )"), []), sqLite.executeSql("\n              CREATE TABLE IF NOT EXISTS ".concat(_this.db_emplacement, " (\n                id_emplacement INTEGER PRIMARY KEY AUTOINCREMENT,\n                reference varchar(255),\n                rayon varchar(255),\n                qrcode varchar(255),\n                UNIQUE (reference , rayon , qrcode )\n\n              )"), []), sqLite.executeSql("\n              CREATE TABLE IF NOT EXISTS ".concat(_this.db_stock, " (\n                stock_id INTEGER PRIMARY KEY AUTOINCREMENT, \n                material varchar(255),\n                Qphysique  INTEGER,\n                Qsap INTEGER  ,\n                ecart decimal(10, 4) ,\n                id_emplacement INTEGER ,\n                id_inventaire INTEGER ,\n                FOREIGN KEY(\"material\") REFERENCES \"Product\" ,\n                FOREIGN KEY(\"id_emplacement\") REFERENCES \"emplacement\" ,\n                FOREIGN KEY(\"id_inventaire\") REFERENCES \"Inventaire\",\n                UNIQUE (material) \n\n\n\n              )"), []).then(function (res) {//alert(JSON.stringify(res));
                })["catch"](function (error) {
                  return alert(JSON.stringify(error));
                });
              })["catch"](function (error) {
                return alert(JSON.stringify(error));
              });
            });
          } // Crud

        }, {
          key: "addProduct",
          value: function addProduct(n, e, c) {
            var _this2 = this;

            // validation
            if (!n.length || !e.length || !c.length) {
              alert('Provide both email & name');
              return;
            }

            this.dbInstance.executeSql("\n      INSERT INTO ".concat(this.db_table, " (material, description , cagette) VALUES ('").concat(n, "', '").concat(e, "' , '").concat(c, "')"), []).then(function () {
              alert("Success");

              _this2.getAllProducts();
            }, function (e) {
              alert(JSON.stringify(e.err));
            });
          }
        }, {
          key: "addQuantite",
          value: function addQuantite(id, Qphysique) {
            var _this3 = this;

            var data = [Qphysique];
            return this.dbInstance.executeSql("\n      UPDATE ".concat(this.db_stock, "  SET Qphysique = ?  WHERE stock_id = ").concat(id, " "), data).then(function () {
              alert("Success");

              _this3.getAllStock();
            }, function (e) {
              alert(JSON.stringify(e.err));
            });
          }
        }, {
          key: "getAllProducts",
          value: function getAllProducts() {
            var _this4 = this;

            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_table), []).then(function (res) {
              _this4.Prodcuts = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this4.Prodcuts.push(res.rows.item(i));
                }

                return _this4.Prodcuts;
              }
            }, function (e) {
              alert(JSON.stringify(e));
            });
          } // Get user

        }, {
          key: "getProduct",
          value: function getProduct(id) {
            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_table, " WHERE product_id = ?"), [id]).then(function (res) {
              return {
                product_id: res.rows.item(0).product_id,
                material: res.rows.item(0).material,
                description: res.rows.item(0).description,
                cagette: res.rows.item(0).cagette
              };
            });
          } // Update

        }, {
          key: "updateProduct",
          value: function updateProduct(id, material, description, cagette) {
            var data = [material, description, cagette];
            return this.dbInstance.executeSql("UPDATE ".concat(this.db_table, " SET material = ?, description = ? , cagette = ? WHERE product_id = ").concat(id), data);
          } // Delete

        }, {
          key: "deleteProduct",
          value: function deleteProduct(product) {
            var _this5 = this;

            this.dbInstance.executeSql("\n      DELETE FROM ".concat(this.db_table, " WHERE product_id = ").concat(product), []).then(function () {
              alert("produit deleted!");

              _this5.getAllProducts();
            })["catch"](function (e) {
              alert(JSON.stringify(e));
            });
          }
        }, {
          key: "addInventai",
          value: function addInventai(n, e, c) {
            var _this6 = this;

            this.dbInstance.executeSql("\n      INSERT INTO ".concat(this.db_inventaire, " (titre, date , type) VALUES ('").concat(n, "', '").concat(e, "' , '").concat(c, "')"), []).then(function () {
              alert("Success");

              _this6.getAllInvent();
            }, function (e) {
              alert(JSON.stringify(e.err));
            });
          }
        }, {
          key: "getAllInvent",
          value: function getAllInvent() {
            var _this7 = this;

            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_inventaire), []).then(function (res) {
              _this7.Inventaire = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this7.Inventaire.push(res.rows.item(i));
                }

                return _this7.Inventaire;
              }
            }, function (e) {
              alert(JSON.stringify(e));
            });
          } // Get user

        }, {
          key: "getInvent",
          value: function getInvent(id) {
            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_inventaire, " WHERE inventaire_id = ?"), [id]).then(function (res) {
              return {
                inventaire_id: res.rows.item(0).inventaire_id,
                titre: res.rows.item(0).titre,
                date: res.rows.item(0).date,
                type: res.rows.item(0).type
              };
            });
          } // Update

        }, {
          key: "updateInvent",
          value: function updateInvent(id, titre, date, type) {
            var data = [titre, date, type];
            return this.dbInstance.executeSql("UPDATE ".concat(this.db_inventaire, " SET titre = ?, date = ? , type = ? WHERE inventaire_id = ").concat(id), data);
          } // Delete

        }, {
          key: "deleteInevent",
          value: function deleteInevent(invent) {
            var _this8 = this;

            this.dbInstance.executeSql("\n      DELETE FROM ".concat(this.db_inventaire, " WHERE inventaire_id = ").concat(invent), []).then(function () {
              alert("inventaire deleted!");

              _this8.getAllInvent();
            })["catch"](function (e) {
              alert(JSON.stringify(e));
            });
          }
        }, {
          key: "addUser",
          value: function addUser(n, p, u, e, pa, te, r) {
            var _this9 = this;

            // validation
            this.dbInstance.executeSql("\n      INSERT INTO ".concat(this.db_users, " (nom, prenom , username , email , password ,telephone , role ) VALUES ('").concat(n, "', '").concat(p, "' , '").concat(u, "' , '").concat(e, "' , '").concat(pa, "', '").concat(te, "' ,  '").concat(r, "')"), []).then(function () {
              alert("Success");

              _this9.getAllUsers();
            }, function (e) {
              alert(JSON.stringify(e.err));
            });
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            var _this10 = this;

            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_users), []).then(function (res) {
              _this10.Users = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this10.Users.push(res.rows.item(i));
                }

                return _this10.Users;
              }
            }, function (e) {
              alert(JSON.stringify(e));
            });
          } // Get user

        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_users, " WHERE user_id = ?"), [id]).then(function (res) {
              return {
                user_id: res.rows.item(0).user_id,
                nom: res.rows.item(0).nom,
                prenom: res.rows.item(0).prenom,
                username: res.rows.item(0).username,
                email: res.rows.item(0).email,
                password: res.rows.item(0).password,
                telephone: res.rows.item(0).telephone,
                role: res.rows.item(0).role
              };
            });
          } // Update

        }, {
          key: "updateUser",
          value: function updateUser(id, nom, prenom, username, email, password, tele, role) {
            var data = [nom, prenom, username, email, password, tele, role];
            return this.dbInstance.executeSql("UPDATE ".concat(this.db_users, " SET nom = ?, prenom= ? , username = ? , email =? , password =? , telephone =? ,role =? WHERE user_id = ").concat(id), data);
          } // Delete

        }, {
          key: "deleteUser",
          value: function deleteUser(user) {
            var _this11 = this;

            this.dbInstance.executeSql("\n      DELETE FROM ".concat(this.db_users, " WHERE product_id = ").concat(user), []).then(function () {
              alert("User deleted!");

              _this11.getAllUsers();
            })["catch"](function (e) {
              alert(JSON.stringify(e));
            });
          }
        }, {
          key: "login",
          value: function login(username, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.dbInstance.executeSql('SELECT * FROM users', []).then(function (data) {
                        if (data.rows.length > 0) {
                          for (var i = 0; i < data.rows.length; i++) {
                            if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 0) {
                              _this12.router.navigate(['/menu']);
                            } else if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 1) {
                              _this12.router.navigate(['/create']);
                            } else if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 2) {
                              _this12.router.navigate(['/inventaire']);
                            }
                          }
                        }
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getProductMaterial",
          value: function getProductMaterial(qrcode) {
            return this.dbInstance.executeSql(" SELECT s.Qphysique as Qphysique , s.stock_id as stock_id  ,e.qrcode as qrcode , s.material AS material  , p.description  FROM  Stock s , emplacement e , Product p\n      where e.id_emplacement = s.id_emplacement and s.material=p.material and e.qrcode = ?  ", [qrcode]).then(function (res) {
              return {
                material: res.rows.item(0).material,
                description: res.rows.item(0).description,
                qrcode: res.rows.item(0).qrcode,
                stock_id: res.rows.item(0).stock_id,
                Qphysique: res.rows.item(0).Qphysique
              };
            });
          }
        }, {
          key: "addStock",
          value: function addStock(n, p, u, e, pa, te) {
            var _this13 = this;

            // validation
            this.dbInstance.executeSql("\n      INSERT INTO ".concat(this.db_stock, " (material, Qphysique , Qsap , ecart , id_emplacement ,id_inventaire  ) VALUES ('").concat(n, "', '").concat(p, "' , '").concat(u, "' , '").concat(e, "' , '").concat(pa, "', '").concat(te, "' )"), []).then(function () {
              alert("Success");

              _this13.getAllStock();
            }, function (e) {
              alert(JSON.stringify(e.err));
            });
          }
        }, {
          key: "getAllStock",
          value: function getAllStock() {
            var _this14 = this;

            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_stock), []).then(function (res) {
              _this14.Stocks = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this14.Stocks.push(res.rows.item(i));
                }

                return _this14.Stocks;
              }
            }, function (e) {
              alert(JSON.stringify(e));
            });
          }
        }, {
          key: "getStock",
          value: function getStock(id) {
            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_stock, " WHERE stock_id = ?"), [id]).then(function (res) {
              return {
                stock_id: res.rows.item(0).stock_id,
                material: res.rows.item(0).material,
                Qphysique: res.rows.item(0).Qphysique,
                Qsap: res.rows.item(0).Qphysique,
                ecart: res.rows.item(0).ecart,
                id_emplacement: res.rows.item(0).id_emplacement,
                id_inventaire: res.rows.item(0).id_inventaire
              };
            });
          }
        }, {
          key: "updateStock",
          value: function updateStock(id, material, Qphysique, Qsap, ecart, id_emplacement, id_inventaire) {
            var data = [material, Qphysique, Qsap, ecart, id_emplacement, id_inventaire];
            return this.dbInstance.executeSql("UPDATE ".concat(this.db_stock, " SET material = ?, Qphysique= ? , Qsap = ? , ecart =? , id_emplacement =? , id_inventaire =?  WHERE stock_id = ").concat(id), data);
          }
        }, {
          key: "deleteStock",
          value: function deleteStock(stock) {
            var _this15 = this;

            this.dbInstance.executeSql("\n      DELETE FROM ".concat(this.db_stock, " WHERE stock_id = ").concat(stock), []).then(function () {
              alert("stock deleted!");

              _this15.getAllStock();
            })["catch"](function (e) {
              alert(JSON.stringify(e));
            });
          }
        }, {
          key: "addEmplacement",
          value: function addEmplacement(n, e, c) {
            var _this16 = this;

            this.dbInstance.executeSql("\n      INSERT INTO ".concat(this.db_emplacement, " (reference, rayon , qrcode) VALUES ('").concat(n, "', '").concat(e, "' , '").concat(c, "')"), []).then(function () {
              alert("Success");

              _this16.getAllEmplacement();
            }, function (e) {
              alert(JSON.stringify(e.err));
            });
          }
        }, {
          key: "getAllEmplacement",
          value: function getAllEmplacement() {
            var _this17 = this;

            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_emplacement), []).then(function (res) {
              _this17.Emplacements = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this17.Emplacements.push(res.rows.item(i));
                }

                return _this17.Emplacements;
              }
            }, function (e) {
              alert(JSON.stringify(e));
            });
          } // Get user

        }, {
          key: "getEmplacement",
          value: function getEmplacement(id) {
            return this.dbInstance.executeSql("SELECT * FROM ".concat(this.db_emplacement, " WHERE id_emplacement = ?"), [id]).then(function (res) {
              return {
                id_emplacement: res.rows.item(0).id_emplacement,
                reference: res.rows.item(0).reference,
                rayon: res.rows.item(0).rayon,
                qrcode: res.rows.item(0).qrcode
              };
            });
          } // Update

        }, {
          key: "updateEmplacement",
          value: function updateEmplacement(id, reference, rayon, qrcode) {
            var data = [reference, rayon, qrcode];
            return this.dbInstance.executeSql("UPDATE ".concat(this.db_emplacement, " SET reference = ?, rayon = ? , qrcode = ? WHERE id_emplacement = ").concat(id), data);
          } // Delete

        }, {
          key: "deleteEmplacement",
          value: function deleteEmplacement(emplacement) {
            var _this18 = this;

            this.dbInstance.executeSql("\n      DELETE FROM ".concat(this.db_emplacement, " WHERE id_emplacement = ").concat(emplacement), []).then(function () {
              alert("emplacement deleted!");

              _this18.getAllEmplacement();
            })["catch"](function (e) {
              alert(JSON.stringify(e));
            });
          }
        }]);

        return CrudService;
      }();

      CrudService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CrudService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CrudService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~create-create-module~create-inv-create-inv-module~edit-edit-module~emplacement-emplacement-m~0482bc81-es5.js.map