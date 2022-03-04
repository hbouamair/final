(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-create-module~create-inv-create-inv-module~edit-edit-module~emplacement-emplacement-m~0482bc81"],{

/***/ "1vsn":
/*!*********************************!*\
  !*** ./src/app/crud.service.ts ***!
  \*********************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let CrudService = class CrudService {
    constructor(platform, sqlite, router) {
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
    }
    // Create SQLite database 
    databaseConn() {
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: this.db_name,
                location: 'default'
            }).then((sqLite) => {
                this.dbInstance = sqLite;
                sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_table} (
                product_id INTEGER PRIMARY KEY AUTOINCREMENT,
                material varchar(255),
                description varchar(255),
                cagette varchar(255),
                UNIQUE (material)

              )`, []),
                    sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_inventaire} (
                id_inventaire INTEGER PRIMARY KEY AUTOINCREMENT,
                titre varchar(255),
                date Date ,
                type varchar(255),
                UNIQUE (titre)

              )`, []),
                    sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_users} (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom varchar(255),
                prenom varchar(255),
                username varchar(255),
                email varchar(255),
                password varchar(255),
                telephone INTEGER, 
                role INTEGER,
                UNIQUE (username , email ,telephone)

              )`, []),
                    sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_emplacement} (
                id_emplacement INTEGER PRIMARY KEY AUTOINCREMENT,
                reference varchar(255),
                rayon varchar(255),
                qrcode varchar(255),
                UNIQUE (reference , rayon , qrcode )

              )`, []),
                    sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_stock} (
                stock_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                material varchar(255),
                Qphysique  INTEGER,
                Qsap INTEGER  ,
                ecart decimal(10, 4) ,
                id_emplacement INTEGER ,
                id_inventaire INTEGER ,
                FOREIGN KEY("material") REFERENCES "Product" ,
                FOREIGN KEY("id_emplacement") REFERENCES "emplacement" ,
                FOREIGN KEY("id_inventaire") REFERENCES "Inventaire",
                UNIQUE (material) 



              )`, [])
                        .then((res) => {
                        //alert(JSON.stringify(res));
                    })
                        .catch((error) => alert(JSON.stringify(error)));
            })
                .catch((error) => alert(JSON.stringify(error)));
        });
    }
    // Crud
    addProduct(n, e, c) {
        // validation
        if (!n.length || !e.length || !c.length) {
            alert('Provide both email & name');
            return;
        }
        this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (material, description , cagette) VALUES ('${n}', '${e}' , '${c}')`, [])
            .then(() => {
            alert("Success");
            this.getAllProducts();
        }, (e) => {
            alert(JSON.stringify(e.err));
        });
    }
    addQuantite(id, Qphysique) {
        let data = [Qphysique];
        return this.dbInstance.executeSql(`
      UPDATE ${this.db_stock}  SET Qphysique = ?  WHERE stock_id = ${id} `, data)
            .then(() => {
            alert("Success");
            this.getAllStock();
        }, (e) => {
            alert(JSON.stringify(e.err));
        });
    }
    getAllProducts() {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
            this.Prodcuts = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.Prodcuts.push(res.rows.item(i));
                }
                return this.Prodcuts;
            }
        }, (e) => {
            alert(JSON.stringify(e));
        });
    }
    // Get user
    getProduct(id) {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE product_id = ?`, [id])
            .then((res) => {
            return {
                product_id: res.rows.item(0).product_id,
                material: res.rows.item(0).material,
                description: res.rows.item(0).description,
                cagette: res.rows.item(0).cagette,
            };
        });
    }
    // Update
    updateProduct(id, material, description, cagette) {
        let data = [material, description, cagette];
        return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET material = ?, description = ? , cagette = ? WHERE product_id = ${id}`, data);
    }
    // Delete
    deleteProduct(product) {
        this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE product_id = ${product}`, [])
            .then(() => {
            alert("produit deleted!");
            this.getAllProducts();
        })
            .catch(e => {
            alert(JSON.stringify(e));
        });
    }
    addInventai(n, e, c) {
        this.dbInstance.executeSql(`
      INSERT INTO ${this.db_inventaire} (titre, date , type) VALUES ('${n}', '${e}' , '${c}')`, [])
            .then(() => {
            alert("Success");
            this.getAllInvent();
        }, (e) => {
            alert(JSON.stringify(e.err));
        });
    }
    getAllInvent() {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_inventaire}`, []).then((res) => {
            this.Inventaire = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.Inventaire.push(res.rows.item(i));
                }
                return this.Inventaire;
            }
        }, (e) => {
            alert(JSON.stringify(e));
        });
    }
    // Get user
    getInvent(id) {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_inventaire} WHERE inventaire_id = ?`, [id])
            .then((res) => {
            return {
                inventaire_id: res.rows.item(0).inventaire_id,
                titre: res.rows.item(0).titre,
                date: res.rows.item(0).date,
                type: res.rows.item(0).type,
            };
        });
    }
    // Update
    updateInvent(id, titre, date, type) {
        let data = [titre, date, type];
        return this.dbInstance.executeSql(`UPDATE ${this.db_inventaire} SET titre = ?, date = ? , type = ? WHERE inventaire_id = ${id}`, data);
    }
    // Delete
    deleteInevent(invent) {
        this.dbInstance.executeSql(`
      DELETE FROM ${this.db_inventaire} WHERE inventaire_id = ${invent}`, [])
            .then(() => {
            alert("inventaire deleted!");
            this.getAllInvent();
        })
            .catch(e => {
            alert(JSON.stringify(e));
        });
    }
    addUser(n, p, u, e, pa, te, r) {
        // validation
        this.dbInstance.executeSql(`
      INSERT INTO ${this.db_users} (nom, prenom , username , email , password ,telephone , role ) VALUES ('${n}', '${p}' , '${u}' , '${e}' , '${pa}', '${te}' ,  '${r}')`, [])
            .then(() => {
            alert("Success");
            this.getAllUsers();
        }, (e) => {
            alert(JSON.stringify(e.err));
        });
    }
    getAllUsers() {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_users}`, []).then((res) => {
            this.Users = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.Users.push(res.rows.item(i));
                }
                return this.Users;
            }
        }, (e) => {
            alert(JSON.stringify(e));
        });
    }
    // Get user
    getUser(id) {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_users} WHERE user_id = ?`, [id])
            .then((res) => {
            return {
                user_id: res.rows.item(0).user_id,
                nom: res.rows.item(0).nom,
                prenom: res.rows.item(0).prenom,
                username: res.rows.item(0).username,
                email: res.rows.item(0).email,
                password: res.rows.item(0).password,
                telephone: res.rows.item(0).telephone,
                role: res.rows.item(0).role,
            };
        });
    }
    // Update
    updateUser(id, nom, prenom, username, email, password, tele, role) {
        let data = [nom, prenom, username, email, password, tele, role];
        return this.dbInstance.executeSql(`UPDATE ${this.db_users} SET nom = ?, prenom= ? , username = ? , email =? , password =? , telephone =? ,role =? WHERE user_id = ${id}`, data);
    }
    // Delete
    deleteUser(user) {
        this.dbInstance.executeSql(`
      DELETE FROM ${this.db_users} WHERE product_id = ${user}`, [])
            .then(() => {
            alert("User deleted!");
            this.getAllUsers();
        })
            .catch(e => {
            alert(JSON.stringify(e));
        });
    }
    login(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.dbInstance.executeSql('SELECT * FROM users', []).then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 0) {
                            this.router.navigate(['/menu']);
                        }
                        else if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 1) {
                            this.router.navigate(['/create']);
                        }
                        else if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 2) {
                            this.router.navigate(['/inventaire']);
                        }
                    }
                }
            });
        });
    }
    getProductMaterial(qrcode) {
        return this.dbInstance.executeSql(` SELECT s.Qphysique as Qphysique , s.stock_id as stock_id  ,e.qrcode as qrcode , s.material AS material  , p.description  FROM  Stock s , emplacement e , Product p
      where e.id_emplacement = s.id_emplacement and s.material=p.material and e.qrcode = ?  `, [qrcode])
            .then((res) => {
            return {
                material: res.rows.item(0).material,
                description: res.rows.item(0).description,
                qrcode: res.rows.item(0).qrcode,
                stock_id: res.rows.item(0).stock_id,
                Qphysique: res.rows.item(0).Qphysique,
            };
        });
    }
    addStock(n, p, u, e, pa, te) {
        // validation
        this.dbInstance.executeSql(`
      INSERT INTO ${this.db_stock} (material, Qphysique , Qsap , ecart , id_emplacement ,id_inventaire  ) VALUES ('${n}', '${p}' , '${u}' , '${e}' , '${pa}', '${te}' )`, [])
            .then(() => {
            alert("Success");
            this.getAllStock();
        }, (e) => {
            alert(JSON.stringify(e.err));
        });
    }
    getAllStock() {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_stock}`, []).then((res) => {
            this.Stocks = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.Stocks.push(res.rows.item(i));
                }
                return this.Stocks;
            }
        }, (e) => {
            alert(JSON.stringify(e));
        });
    }
    getStock(id) {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_stock} WHERE stock_id = ?`, [id])
            .then((res) => {
            return {
                stock_id: res.rows.item(0).stock_id,
                material: res.rows.item(0).material,
                Qphysique: res.rows.item(0).Qphysique,
                Qsap: res.rows.item(0).Qphysique,
                ecart: res.rows.item(0).ecart,
                id_emplacement: res.rows.item(0).id_emplacement,
                id_inventaire: res.rows.item(0).id_inventaire,
            };
        });
    }
    updateStock(id, material, Qphysique, Qsap, ecart, id_emplacement, id_inventaire) {
        let data = [material, Qphysique, Qsap, ecart, id_emplacement, id_inventaire];
        return this.dbInstance.executeSql(`UPDATE ${this.db_stock} SET material = ?, Qphysique= ? , Qsap = ? , ecart =? , id_emplacement =? , id_inventaire =?  WHERE stock_id = ${id}`, data);
    }
    deleteStock(stock) {
        this.dbInstance.executeSql(`
      DELETE FROM ${this.db_stock} WHERE stock_id = ${stock}`, [])
            .then(() => {
            alert("stock deleted!");
            this.getAllStock();
        })
            .catch(e => {
            alert(JSON.stringify(e));
        });
    }
    addEmplacement(n, e, c) {
        this.dbInstance.executeSql(`
      INSERT INTO ${this.db_emplacement} (reference, rayon , qrcode) VALUES ('${n}', '${e}' , '${c}')`, [])
            .then(() => {
            alert("Success");
            this.getAllEmplacement();
        }, (e) => {
            alert(JSON.stringify(e.err));
        });
    }
    getAllEmplacement() {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_emplacement}`, []).then((res) => {
            this.Emplacements = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.Emplacements.push(res.rows.item(i));
                }
                return this.Emplacements;
            }
        }, (e) => {
            alert(JSON.stringify(e));
        });
    }
    // Get user
    getEmplacement(id) {
        return this.dbInstance.executeSql(`SELECT * FROM ${this.db_emplacement} WHERE id_emplacement = ?`, [id])
            .then((res) => {
            return {
                id_emplacement: res.rows.item(0).id_emplacement,
                reference: res.rows.item(0).reference,
                rayon: res.rows.item(0).rayon,
                qrcode: res.rows.item(0).qrcode,
            };
        });
    }
    // Update
    updateEmplacement(id, reference, rayon, qrcode) {
        let data = [reference, rayon, qrcode];
        return this.dbInstance.executeSql(`UPDATE ${this.db_emplacement} SET reference = ?, rayon = ? , qrcode = ? WHERE id_emplacement = ${id}`, data);
    }
    // Delete
    deleteEmplacement(emplacement) {
        this.dbInstance.executeSql(`
      DELETE FROM ${this.db_emplacement} WHERE id_emplacement = ${emplacement}`, [])
            .then(() => {
            alert("emplacement deleted!");
            this.getAllEmplacement();
        })
            .catch(e => {
            alert(JSON.stringify(e));
        });
    }
};
CrudService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CrudService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CrudService);



/***/ })

}]);
//# sourceMappingURL=default~create-create-module~create-inv-create-inv-module~edit-edit-module~emplacement-emplacement-m~0482bc81-es2015.js.map