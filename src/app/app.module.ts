import { FirebaseService } from './services/firebase.service';
import { NgModule } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import {Router} from '@angular/router';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    NgImageSliderModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDOuSymGpo1ZZ3pc0Z0-V1At8jbfLTC5Bc',
    authDomain: 'pranaygitam1.firebaseapp.com',
    databaseURL: 'https://pranaygitam1.firebaseio.com',
    projectId: 'pranaygitam1',
    storageBucket: 'pranaygitam1.appspot.com',
    messagingSenderId: '885075930297',
    appId: '1:885075930297:web:ceb81102b39c7c333aff68'
    })
  ],
  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    WebIntent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
