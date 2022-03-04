
import { Component, OnInit , Input ,NgZone} from '@angular/core';
import { CrudService } from '../crud.service';
import { FTP } from '@awesome-cordova-plugins/ftp/ngx';
import readXlsxFile from 'read-excel-file';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { environment } from '../../config/environment';
import { FilePath } from '@ionic-native/file-path/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';


import {
  NavParams,
  AlertController,
  ModalController,
  Platform,
  ToastController,
} from '@ionic/angular';


declare let cordova: any;

@Component({
  selector: 'app-create-inv',
  templateUrl: './create-inv.page.html',
  styleUrls: ['./create-inv.page.scss'],
})
export class CreateInvPage implements OnInit {

  titre: string = ""; 
  items : Array <any>;
  date: Date ;
  type: string = "";
  create : boolean = true; 
  inventaireTab : any = [];

  selectedValue : any  ;



  constructor( private crud: CrudService ,private fTP: FTP ,public modalController: ModalController ,public toastController: ToastController 
    ,private file: File, private androidPermissions: AndroidPermissions ,private filePath: FilePath, 	private zone: NgZone, private fileOpener: FileOpener ) {
 
    this.storagePermissionCheck();

   }


  ngOnInit() {
  }
  
  ionViewDidEnter() {  
    this.crud.getAllInvent()
  }

  openFileSelector(){
    
  }

  storagePermissionCheck(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => {
        if(!result.hasPermission){
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        }
      },
      err => {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
      }
    );
  }



  createInv(){
    this.crud.addInventai(this.titre,this.date,this.type);
    this.create= false ;
  }
   

  getInventaire(){

  }
 

  
 public connect(){
  return this.fTP.connect('ftp.more-software.com', 'moreftp@more-software.com', 'MorservsWMS2022%').then(() => {
      this.fTP.ls('/Wms').then((res) => {
        this.items = [];
      
        if(res){
          for (let i in res ){
            this.items.push(res[i]);
          }
        }else{
          this.error(
            'no file !!'
          );
        }

       } ) }
    )
  }
  
  async error(text: any) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }

  radioSelect(item) {
    console.log ( "SELECTED! " + item.name);
   
}

upload(){
  
  let localPath = "/storage/emulated/0/Android/data/io.ionic.starter/" + this.selectedValue.name;
  this.fTP.download(localPath , '/Wms/'+this.selectedValue.name ).subscribe(() => {
    this.fileOpener.open('/storage/emulated/0/Android/data/io.ionic.starter/'+this.selectedValue, 'application/vnd.ms-excel').then((res) =>{
              this.excelRead(res);
    }
    ) .catch(e=> console.log(JSON.stringify(e)))
    this.presentToast();
   
 
      (error :any)=>{
        console.log(JSON.stringify(error));
      }

    
    } , (error :any)=>{
      console.log(JSON.stringify(error));
    }
  )


  }

  radioGroupChange(event) {
    console.log("radioGroupChange", this.selectedValue.name);
   
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your file has been download.',
      duration: 2000
    });
    toast.present();
  }




  excelRead(excel){
    
    

    const schema = {
      'Material' :{
        prop : 'material',
        type : String ,
        required : false 

      } ,
      'Description' :{
        prop : 'description',
        type : String ,
        required : false 

      } ,
      'Emplacement' :{
        prop : 'emplacement',
        type : String ,
        required : false 

      } ,
      'Physique' :{
        prop : 'physique',
        type : Number ,
        required : false 

      } ,
      'Sap' :{
        prop : 'sap',
        type : Number ,
        required : false 

      } ,
      'Ecart' :{
        prop : 'ecart',
        type : Number ,
        required : false 

      } ,
      'Cagette' :{
        prop : 'cagette',
        type : String ,
        required : false 

      } ,

    };
    readXlsxFile(excel, {schema}).then((data) =>{
        if( data.rows){

          for (let i of data.rows){
            
            this.inventaireTab.push(i);
          }
         
        }
      //  for ( let i of this.inventaireTab){
         // if(this.inventaireTab[i].physique <= this.inventaireTab[i].sap){
         //   console.log(this.inventaireTab[i].physique);
          //}
         // else{
           // console.log("its true")
          //}
      //  }

      for (let i = 0; i < this.inventaireTab.length; i++) {

       if (this.inventaireTab[i].physique < this.inventaireTab[i].sap){
         console.log("trop")
       }else{
         console.log("c est bien")
       }
        
       
      }
        
           
      

    }
    
    
    
    )

  }


    
}




