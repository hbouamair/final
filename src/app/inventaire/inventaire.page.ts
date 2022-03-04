import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file';
import { Subscription } from 'rxjs';
import { CrudService } from '../crud.service';


import {
  AlertController,
  ModalController,
  Platform,
  ToastController,
} from '@ionic/angular';


@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.page.html',
  styleUrls: ['./inventaire.page.scss'],
})


export class InventairePage implements OnInit {
  subscription: Subscription;
  hideMe:boolean =true ; 
  spread: any;
  excelIO: any;
  titre: string = ""; 
  date: Date = null;
  type: string = "";


  constructor( 
   
    public toastController: ToastController,
    public platform: Platform,
     public modalController: ModalController,private crud: CrudService) { 
      this.crud.databaseConn(); 
     }

  ngOnInit() {



  }
  ionViewDidEnter() {  
    this.crud.getAllInvent()
  }
  inventaireTab : any = [];
  
  async error(text: any) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }

  async succes(text: any) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  hide(){
    this.hideMe= true ;
  }

  excelRead(e , elem :any){
    let fileReaded :any ;
    fileReaded = e.target.files[0];
    let type = e.target.files[0].name.split('.').pop();
    



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
    readXlsxFile(e.target.files[0], {schema}).then((data) =>{
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
