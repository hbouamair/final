import { Component, OnInit } from '@angular/core';


import { ProductScanComponent } from '../product-scan/product-scan.component';

import {
  AlertController,
  ModalController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { CrudService } from '../crud.service';
import {  BarcodeScanner,
  BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
const options: BarcodeScannerOptions = {
  preferFrontCamera: false,
  showFlipCameraButton: false,
  showTorchButton: true,
  torchOn: false,
  prompt: 'Scanner Le code Qr du produit',
  resultDisplayDuration: 500,
  formats: 'QR_CODE,PDF_417 ',
  orientation: 'portrait',
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  data: any;

  constructor ( private crud: CrudService,  public modalController: ModalController,     private alertController: AlertController,   public toastController: ToastController,  
  public barcodeCtrl: BarcodeScanner ,) { }

  ngOnInit() {
  }
  scan() {
    this.barcodeCtrl
      .scan(options)
      .then((barcodeData) => {
        
        this.Scanning(barcodeData.text);
      })
      .catch((err) => {
        this.error(err);
      });
  }

  Scanning(qrcode: string) {
    console.log('idMaterial## ' + qrcode);
    this.crud.getProductMaterial(qrcode).then(
      (data: any) => {
        if (data) {
          this.presentModal(data);
        } else
          this.error(
            'Une erreur interne est survenue,Merci de reprendre le scann'
          );
      },
      (error: any) => {
        this.error(
          'Une erreur interne est survenue,merci de réessayer ultérieurement'
        );
      }
    );
  }

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      swipeToClose: true,
      component: ProductScanComponent,
      componentProps: {
        item: item,
      },
    });
    return await modal.present();
  }

  async error(text: any) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }





   
}
