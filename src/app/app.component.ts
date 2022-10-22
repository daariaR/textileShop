import { Component } from '@angular/core';


@Component({ selector: 'app', templateUrl: 'app.component.html',styleUrls: ['app.component.css']})
export class AppComponent {
    id = localStorage.getItem("id");


    constructor() {}
    

    logout() {
        localStorage.removeItem("id");
        console.log(this.id);                  ///okej tek kad ucitamo on ce bitii null
        window.location.href="/signin";
          
    }
}