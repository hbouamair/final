import { Component, OnInit, Input } from '@angular/core';
import {
  NavParams,
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-product-scan',
  templateUrl: './product-scan.component.html',
  styleUrls: ['./product-scan.component.scss'],
})
export class ProductScanComponent implements OnInit {
@Input() item :any ;
  qphysique : number = null ; 
 
  constructor(public navParams : NavParams ,    private router: Router,
     public toastController: ToastController,
    public alertController: AlertController,
    public modalController: ModalController, private crud: CrudService, private activatedRoute: ActivatedRoute,) {
    

     }

  ngOnInit() {}


  ionViewWillEnter(){
   this.item = this.navParams.get('item');
  }

  dismiss(){
    this.modalController.dismiss({
      dismissed : true,
    });
  }



   saveQantite(id , qphysique){
    this.crud.addQuantite( id,qphysique).then(() => {
     this.dismiss();


    });


     
    
  }


  setQuantite(qt){
    this.qphysique = qt ;
  }

}
