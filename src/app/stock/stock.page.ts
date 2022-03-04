import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  hideMe : boolean =true ;
  material: string = "";
  Qphysique: number = null;
  Qsap: number = null;
  ecart: number = null;
  id_emplacement: number = null;
  id_inventaire : number =null ;

  constructor( private crud: CrudService) { }

  ngOnInit() {
  }

    ionViewDidEnter() {  
    this.crud.getAllStock()
  }


createStock(){
  this.crud.addStock(this.material , this.Qphysique , this.Qsap , this.ecart , this.id_emplacement ,this.id_inventaire)
}
    hide(){
    this.hideMe =false ;
  }
   

  remove(stock){
    this.crud.deleteStock(stock);

  }

}
