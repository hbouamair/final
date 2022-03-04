import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-inventaire-list',
  templateUrl: './inventaire-list.page.html',
  styleUrls: ['./inventaire-list.page.scss'],
})
export class InventaireListPage implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit() {
  }
  

   ionViewDidEnter() {  
    this.crud.getAllInvent()
  }
   remove(inv) {
    this.crud.deleteInevent(inv);
  }

}
