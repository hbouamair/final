import { UploadFileComponent } from './../upload-file/upload-file.component';
import { Component, OnInit , Input } from '@angular/core';
import { CrudService } from '../crud.service';
import { FTP } from '@awesome-cordova-plugins/ftp/ngx';

import {
  NavParams,
  AlertController,
  ModalController,
  Platform,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  items : Array <any>;
  material: string = "";
  description: string = "";
  cagette: string = "";
  hideMe : boolean =true ;

  modal : boolean = false ;

  constructor(
   private crud: CrudService ,private fTP: FTP ,public modalController: ModalController ,public toastController: ToastController 
  ) {
    this.crud.databaseConn(); 
  }

  ngOnInit() { }
  inventaireTab : any = [];


   
  createProduct(){
    this.crud.addProduct(this.material,this.description,this.cagette);
  } 
   
  remove(product) {
    this.crud.deleteProduct(product);
  }
   hide(){
    this.hideMe =false ;
  }
  show(){
    this.hideMe =true ;
  }


 






 
  
}
