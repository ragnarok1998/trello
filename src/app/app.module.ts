import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
//firebase imports
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule  } from "@angular/fire/firestore";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
