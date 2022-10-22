import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { MaterialModule } from './material.module';;

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './cart/cart.component'
;
import { ProfileComponent } from './profile/profile.component'
;
;
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component'
;
import { ConfirmationProfileDeleteComponent } from './confirmation-profile-delete/confirmation-profile-delete.component'





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        FlexLayoutModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CartComponent ,
        ProfileComponent ,
        SignupComponent ,
        SigninComponent
,
        ConfirmationProfileDeleteComponent    ],
    providers: [


        // provider used to create fake backend
    ],
    entryComponents: []
,
    bootstrap: [AppComponent],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { };