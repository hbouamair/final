import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.page.html',
  styleUrls: ['./emplacement.page.scss'],
})
export class EmplacementPage implements OnInit {

    reference: string = "";
    rayon: string = "";
    qrcode: string = "";
    hideMe : boolean =true ;

  constructor(
   private crud: CrudService
  ) {
    this.crud.databaseConn(); 
  }

  ngOnInit() { }

  ionViewDidEnter() {  
    this.crud.getAllEmplacement()
  }
   
  createEmplacement(){
    this.crud.addEmplacement(this.reference,this.rayon,this.qrcode);
  }
   
  remove(emplacement) {
    this.crud.deleteEmplacement(emplacement);
  }
   hide(){
    this.hideMe =false ;
  }
  show(){
    this.hideMe =true ;
  }
}
