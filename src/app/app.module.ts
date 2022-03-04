import { FilePath } from '@ionic-native/file-path/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClientModule } from '@angular/common/http'
import { FTP } from '@awesome-cordova-plugins/ftp/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';







// plugins
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,HttpClientModule],
  providers: [ 
    
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },SQLite ,
     BarcodeScanner,FTP, File , AndroidPermissions , FilePath, FileOpener
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
