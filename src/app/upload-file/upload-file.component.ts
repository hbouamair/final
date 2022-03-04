import { Component, OnInit, Input } from '@angular/core';
import {
  NavParams,
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  @Input() item :any ;

  constructor(public navParams : NavParams ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.item = this.navParams.get('item');
   }

}
