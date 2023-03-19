import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { MgrLoginComponent } from './component/manager/mgr-login/mgr-login.component';
import { MgrRegisterComponent } from './component/manager/mgr-register/mgr-register.component';
import { TlkRegisterComponent } from './component/taluk_officer/tlk-register/tlk-register.component';
import { TlkLoginComponent } from './component/taluk_officer/tlk-login/tlk-login.component';
import { MgrDashboardComponent } from './component/manager/mgr-dashboard/mgr-dashboard.component';
import { MgrDataentryComponent } from './component/manager/mgr-dataentry/mgr-dataentry.component';
import { MgrFarmerlistComponent } from './component/manager/mgr-farmerlist/mgr-farmerlist.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyCuFUg_SN-eDNSGEePceDOYkk49JT38ZJY",
  authDomain: "milkdairy-c8dd5.firebaseapp.com",
  projectId: "milkdairy-c8dd5",
  storageBucket: "milkdairy-c8dd5.appspot.com",
  messagingSenderId: "281847531290",
  appId: "1:281847531290:web:87225e3a36ad00d8020ea3"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MgrLoginComponent,
    MgrRegisterComponent,
    TlkRegisterComponent,
    TlkLoginComponent,
    MgrDashboardComponent,
    MgrDataentryComponent,
    MgrFarmerlistComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
