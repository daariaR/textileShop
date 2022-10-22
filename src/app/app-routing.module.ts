import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';

import { HomeComponent } from './home';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [

    
    { path: '', component: HomeComponent},
    { path : 'cart', component: CartComponent },
    { path : 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},





    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }