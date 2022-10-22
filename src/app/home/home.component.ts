import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Order } from '@app/_models/order';
import { UserService } from '@app/_services/user.service';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'home.component.html' , styleUrls: ['home.component.css']} )
export class HomeComponent{

    hide = true;
    message:any;
    orderModel = new Order();

    favUser: any;

  
    orders: any;

    dataLounge: any;

    id = localStorage.getItem("id");

    page = 0;
    size = 3;
    constructor( private _snackBar: MatSnackBar, private userService:UserService) { 
       this.getData({pageIndex: this.page, pageSize: this.size});  

       this.userService.getAllTextil()
       .pipe(first())
       .subscribe(dataLounge =>{ this.dataLounge = dataLounge, console.log(this.dataLounge)})
      }

    data2 = [
      {id:"1", url: "assets/images/textile1.jpg", desc: " SpringStone " , price: "2999", type: "sheets", product_arr_time: "2 days", avlbl: false},
      {id:"2", url: "assets/images/textile2.jpg", desc: " Mainline  ", price: "2399", type: "sheets", product_arr_time: "1-3 days", avlbl: true},
      {id:"3", url: "assets/images/textile3.jpg", desc: " NorthQuest ", price: "2299", type: "sheets", product_arr_time: "3-6 days", avlbl: true},
      {id:"4", url: "assets/images/textile4.jpg", desc: " ComfoLust  ", price: "2899", type: "sheets", product_arr_time: "10 days", avlbl: true},
      {id:"5", url: "assets/images/textile5.jpg", desc: " MapleSure  ", price: "1599", type: "sheets", product_arr_time: "4-7 days", avlbl: true},
      {id:"6", url: "assets/images/textile6.jpg", desc: " Ventura  ", price: "3899", type: "sheets", product_arr_time: "3 days", avlbl: true},
      {id:"7", url: "assets/images/textile7.jpg", desc: " Uprise  ", price: "2199", type: "sheets", product_arr_time: "2-4 days", avlbl: true},
      {id:"8", url: "assets/images/textile8.jpg", desc: " AngelRest  ", price: "1899", type: "sheets", product_arr_time: "3-5 days", avlbl: true,}
     
    ];
    data : any = [] ;

    getData(obj: any) {
      let index=0,
      startingIndex=obj.pageIndex * obj.pageSize,
      endingIndex=startingIndex + obj.pageSize;
      this.data = this.data2.filter(() => {
        index++;
        return (index > startingIndex && index <= endingIndex) ? true : false;
      });
    }


    ////////////// DATA LOUNGE + FILTERS //////////////
    
    // dataLounge = [
    //   {id:"1", url: "assets/images/blanket1.jpg", desc: " Heavenly   " , price: "1999", type: "blanket",  product_arr_time: "2 days", avlbl: false  },
    //   {id:"2", url: "assets/images/cushion1.jpg", desc: " ComfyCrown  ", price: "999", type: "cushion", product_arr_time: "3-6 days", avlbl: true},
    //   {id:"16", url: "assets/images/chair4.jpg", desc: " Allegro   ", price: "4599", type: "chair", product_arr_time: "2 days", avlbl: true},
    //   {id:"3", url: "assets/images/cushion2.jpg", desc: " Inventive  ", price: "1199", type: "cushion", product_arr_time: "2 days", avlbl: true },
    //   {id:"4", url: "assets/images/blanket2.jpg", desc: " Continental", price: "2499", type: "blanket", product_arr_time: "2 days", avlbl: true},
    //   {id:"5", url: "assets/images/cushion3.jpg", desc: " DrCloud  ", price: "899", type: "cushion", product_arr_time: "3-5 days", avlbl: true},
    //   {id:"6", url: "assets/images/chair1.jpg", desc: " Nutty ", price: "4999", type: "chair",  product_arr_time: "7-15 days", avlbl: true },
    //   {id:"7", url: "assets/images/blanket3.jpg", desc: " Goldmine ", price: "2199", type: "blanket", product_arr_time: "2 days", avlbl: true},
    //   {id:"8", url: "assets/images/cushion6.jpg", desc: " CozyCloud  ", price: "1299", type: "cushion", product_arr_time: "3-5 days", avlbl: true},
    //   {id:"9", url: "assets/images/blanket4.jpg", desc: " Relict", price: "1199", type: "blanket",  product_arr_time: "2 days", avlbl: true  },
    //   {id:"15", url: "assets/images/chair3.jpg", desc: " Softport  ", price: "2999", type: "chair", product_arr_time: "2 days", avlbl: true},
    //   {id:"10", url: "assets/images/cushion4.jpg", desc: " Bering", price: "699", type: "cushion",  product_arr_time: "2 days", avlbl: true},
    //   {id:"11", url: "assets/images/chair2.jpg", desc: " Cottage  ", price: "5899", type: "chair",  product_arr_time: "2 days", avlbl: true},
    //   {id:"12", url: "assets/images/cushion5.jpg", desc: " Somni  ", price: "999", type: "cushion", product_arr_time: "3-5 days", avlbl: true  },
    //   {id:"13", url: "assets/images/chair5.jpg", desc: " Linen  ", price: "4199", type: "chair",  product_arr_time: "6-12 days", avlbl: true  },
    //   {id:"14", url: "assets/images/blanket5.jpg", desc: " Universal", price: "3899", type: "blanket",  product_arr_time: "2 days", avlbl: true  },
     
    // ];



    doFilter(typee : any){
      var tofilter= [
        {id:"1", url: "assets/images/blanket1.jpg", desc: " Heavenly   " , price: "1999", type: "blanket",  product_arr_time: "2 days", avlbl: false, faav: "favorite_border"  },
        {id:"2", url: "assets/images/cushion1.jpg", desc: " ComfyCrown  ", price: "999", type: "cushion", product_arr_time: "3-6 days", avlbl: true, faav: "favorite_border"},
        {id:"16", url: "assets/images/chair4.jpg", desc: " Allegro   ", price: "4599", type: "chair", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"3", url: "assets/images/cushion2.jpg", desc: " Inventive  ", price: "1199", type: "cushion", product_arr_time: "2 days", avlbl: true, faav: "favorite_border" },
        {id:"4", url: "assets/images/blanket2.jpg", desc: " Continental", price: "2499", type: "blanket", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"5", url: "assets/images/cushion3.jpg", desc: " DrCloud  ", price: "899", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"6", url: "assets/images/chair1.jpg", desc: " Nutty ", price: "4999", type: "chair",  product_arr_time: "7-15 days", avlbl: true, faav: "favorite_border" },
        {id:"7", url: "assets/images/blanket3.jpg", desc: " Goldmine ", price: "2199", type: "blanket", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"8", url: "assets/images/cushion6.jpg", desc: " CozyCloud  ", price: "1299", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"9", url: "assets/images/blanket4.jpg", desc: " Relict", price: "1199", type: "blanket",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
        {id:"15", url: "assets/images/chair3.jpg", desc: " Softport  ", price: "2999", type: "chair", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"10", url: "assets/images/cushion4.jpg", desc: " Bering", price: "699", type: "cushion",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"11", url: "assets/images/chair2.jpg", desc: " Cottage  ", price: "5899", type: "chair",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"12", url: "assets/images/cushion5.jpg", desc: " Somni  ", price: "999", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"  },
        {id:"13", url: "assets/images/chair5.jpg", desc: " Linen  ", price: "4199", type: "chair",  product_arr_time: "6-12 days", avlbl: true, faav: "favorite_border"  },
        {id:"14", url: "assets/images/blanket5.jpg", desc: " Universal", price: "3899", type: "blanket",  product_arr_time: "2 days", avlbl: true,faav: "favorite_border"  },   
      ];
      this.dataLounge = tofilter.filter(s => s.type == typee);
    }

    doFilterPriceRange(minP : any, maxP : any){
      var tofilter= [
        {id:"1", url: "assets/images/blanket1.jpg", desc: " Heavenly   " , price: "1999", type: "blanket",  product_arr_time: "2 days", avlbl: false, faav: "favorite_border"  },
        {id:"2", url: "assets/images/cushion1.jpg", desc: " ComfyCrown  ", price: "999", type: "cushion", product_arr_time: "3-6 days", avlbl: true, faav: "favorite_border"},
        {id:"16", url: "assets/images/chair4.jpg", desc: " Allegro   ", price: "4599", type: "chair", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"3", url: "assets/images/cushion2.jpg", desc: " Inventive  ", price: "1199", type: "cushion", product_arr_time: "2 days", avlbl: true, faav: "favorite_border" },
        {id:"4", url: "assets/images/blanket2.jpg", desc: " Continental", price: "2499", type: "blanket", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"5", url: "assets/images/cushion3.jpg", desc: " DrCloud  ", price: "899", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"6", url: "assets/images/chair1.jpg", desc: " Nutty ", price: "4999", type: "chair",  product_arr_time: "7-15 days", avlbl: true, faav: "favorite_border" },
        {id:"7", url: "assets/images/blanket3.jpg", desc: " Goldmine ", price: "2199", type: "blanket", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"8", url: "assets/images/cushion6.jpg", desc: " CozyCloud  ", price: "1299", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"9", url: "assets/images/blanket4.jpg", desc: " Relict", price: "1199", type: "blanket",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
        {id:"15", url: "assets/images/chair3.jpg", desc: " Softport  ", price: "2999", type: "chair", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"10", url: "assets/images/cushion4.jpg", desc: " Bering", price: "699", type: "cushion",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"11", url: "assets/images/chair2.jpg", desc: " Cottage  ", price: "5899", type: "chair",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"12", url: "assets/images/cushion5.jpg", desc: " Somni  ", price: "999", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"  },
        {id:"13", url: "assets/images/chair5.jpg", desc: " Linen  ", price: "4199", type: "chair",  product_arr_time: "6-12 days", avlbl: true, faav: "favorite_border"  },
        {id:"14", url: "assets/images/blanket5.jpg", desc: " Universal", price: "3899", type: "blanket",  product_arr_time: "2 days", avlbl: true,faav: "favorite_border" },
       
      ];
      this.dataLounge = tofilter.filter(s =>  Number(s.price) > minP && Number(s.price) < maxP);
    }

    restartFilters(){
      this.dataLounge = [
        {id:"1", url: "assets/images/blanket1.jpg", desc: " Heavenly   " , price: "1999", type: "blanket",  product_arr_time: "2 days", avlbl: false, faav: "favorite_border"  },
        {id:"2", url: "assets/images/cushion1.jpg", desc: " ComfyCrown  ", price: "999", type: "cushion", product_arr_time: "3-6 days", avlbl: true, faav: "favorite_border"},
        {id:"16", url: "assets/images/chair4.jpg", desc: " Allegro   ", price: "4599", type: "chair", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"3", url: "assets/images/cushion2.jpg", desc: " Inventive  ", price: "1199", type: "cushion", product_arr_time: "2 days", avlbl: true, faav: "favorite_border" },
        {id:"4", url: "assets/images/blanket2.jpg", desc: " Continental", price: "2499", type: "blanket", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"5", url: "assets/images/cushion3.jpg", desc: " DrCloud  ", price: "899", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"6", url: "assets/images/chair1.jpg", desc: " Nutty ", price: "4999", type: "chair",  product_arr_time: "7-15 days", avlbl: true, faav: "favorite_border" },
        {id:"7", url: "assets/images/blanket3.jpg", desc: " Goldmine ", price: "2199", type: "blanket", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"8", url: "assets/images/cushion6.jpg", desc: " CozyCloud  ", price: "1299", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"9", url: "assets/images/blanket4.jpg", desc: " Relict", price: "1199", type: "blanket",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
        {id:"15", url: "assets/images/chair3.jpg", desc: " Softport  ", price: "2999", type: "chair", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"10", url: "assets/images/cushion4.jpg", desc: " Bering", price: "699", type: "cushion",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"11", url: "assets/images/chair2.jpg", desc: " Cottage  ", price: "5899", type: "chair",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"12", url: "assets/images/cushion5.jpg", desc: " Somni  ", price: "999", type: "cushion", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"  },
        {id:"13", url: "assets/images/chair5.jpg", desc: " Linen  ", price: "4199", type: "chair",  product_arr_time: "6-12 days", avlbl: true, faav: "favorite_border"  },
        {id:"14", url: "assets/images/blanket5.jpg", desc: " Universal", price: "3899", type: "blanket",  product_arr_time: "2 days", avlbl: true,faav: "favorite_border" }, 
      ];
    }


    ////////////// BEDROOM LOUNGE + FILTERS //////////////

    dataBedroom = [
      {id:"17", url: "assets/images/textile1.jpg", desc: " Wooly  " , price: "2999", type: "sheets",  product_arr_time: "2-4 days", avlbl: false, faav: "favorite_border"},
      {id:"18", url: "assets/images/cover1.jpg", desc: " Harmony ", price: "2999", type: "cover", product_arr_time: "2-3 days", avlbl: true, faav: "favorite_border"},
      {id:"19", url: "assets/images/cover2.jpg", desc: " Wonder  ", price: "2399", type: "cover", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
      {id:"20", url: "assets/images/textile2.jpg", desc: " VelvoQuest", price: "2899", type: "sheets", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"},
      {id:"21", url: "assets/images/cover3.jpg", desc: " Palace  ", price: "2999.", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"22", url: "assets/images/textile3.jpg", desc: " Necessary", price: "4999", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
      {id:"23", url: "assets/images/cover4.jpg", desc: " Cosmix", price: "2199", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"24", url: "assets/images/textile4.jpg", desc: " AngelCharm  ", price: "1899", type: "sheets", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"25", url: "assets/images/cover5.jpg", desc: " Vine", price: "1199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"26", url: "assets/images/textile5.jpg", desc: " WellCushy", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"27", url: "assets/images/textile6.jpg", desc: " PillowSiesta  ", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"28", url: "assets/images/textile7.jpg", desc: " Moldex  ", price: "1899", type: "sheets", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
      {id:"29", url: "assets/images/cover6.jpg", desc: " TheraPlume  ", price: "2199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"30", url: "assets/images/textile8.jpg", desc: " ReliefWynk", price: "1899", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
     
    ];

    doFilterB(typecc : any){
      var tofilter  =[
        {id:"17", url: "assets/images/textile1.jpg", desc: " Wooly  " , price: "2999", type: "sheets",  product_arr_time: "2-4 days", avlbl: false, faav: "favorite_border"},
        {id:"18", url: "assets/images/cover1.jpg", desc: " Harmony ", price: "2999", type: "cover", product_arr_time: "2-3 days", avlbl: true, faav: "favorite_border"},
        {id:"19", url: "assets/images/cover2.jpg", desc: " Wonder  ", price: "2399", type: "cover", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"20", url: "assets/images/textile2.jpg", desc: " VelvoQuest", price: "2899", type: "sheets", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"},
        {id:"21", url: "assets/images/cover3.jpg", desc: " Palace  ", price: "2999.", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"22", url: "assets/images/textile3.jpg", desc: " Necessary", price: "4999", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"23", url: "assets/images/cover4.jpg", desc: " Cosmix", price: "2199", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"24", url: "assets/images/textile4.jpg", desc: " AngelCharm  ", price: "1899", type: "sheets", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"25", url: "assets/images/cover5.jpg", desc: " Vine", price: "1199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"26", url: "assets/images/textile5.jpg", desc: " WellCushy", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"27", url: "assets/images/textile6.jpg", desc: " PillowSiesta  ", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"28", url: "assets/images/textile7.jpg", desc: " Moldex  ", price: "1899", type: "sheets", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"29", url: "assets/images/cover6.jpg", desc: " TheraPlume  ", price: "2199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"30", url: "assets/images/textile8.jpg", desc: " ReliefWynk", price: "1899", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
       
      ];
      this.dataBedroom = tofilter.filter(s => s.type == typecc);
      console.log(this.dataBedroom);
    }
    
    doFilterPriceRangeB(minP : any, maxP : any){
    
      console.log(minP);
      console.log(maxP);
    
      var tofilter  = [
        {id:"17", url: "assets/images/textile1.jpg", desc: " Wooly  " , price: "2999", type: "sheets",  product_arr_time: "2-4 days", avlbl: false, faav: "favorite_border"},
        {id:"18", url: "assets/images/cover1.jpg", desc: " Harmony ", price: "2999", type: "cover", product_arr_time: "2-3 days", avlbl: true, faav: "favorite_border"},
        {id:"19", url: "assets/images/cover2.jpg", desc: " Wonder  ", price: "2399", type: "cover", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"20", url: "assets/images/textile2.jpg", desc: " VelvoQuest", price: "2899", type: "sheets", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"},
        {id:"21", url: "assets/images/cover3.jpg", desc: " Palace  ", price: "2999.", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"22", url: "assets/images/textile3.jpg", desc: " Necessary", price: "4999", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"23", url: "assets/images/cover4.jpg", desc: " Cosmix", price: "2199", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"24", url: "assets/images/textile4.jpg", desc: " AngelCharm  ", price: "1899", type: "sheets", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"25", url: "assets/images/cover5.jpg", desc: " Vine", price: "1199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"26", url: "assets/images/textile5.jpg", desc: " WellCushy", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"27", url: "assets/images/textile6.jpg", desc: " PillowSiesta  ", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"28", url: "assets/images/textile7.jpg", desc: " Moldex  ", price: "1899", type: "sheets", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"29", url: "assets/images/cover6.jpg", desc: " TheraPlume  ", price: "2199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"30", url: "assets/images/textile8.jpg", desc: " ReliefWynk", price: "1899", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
       
      ];
    
      this.dataBedroom = tofilter.filter(s =>  Number(s.price) > minP && Number(s.price) < maxP);
      console.log(this.dataBedroom);
    }
    
    searchFilterB(filterValue: string){
    
      var tofilter  = [
        {id:"17", url: "assets/images/textile1.jpg", desc: " Wooly  " , price: "2999", type: "sheets",  product_arr_time: "2-4 days", avlbl: false, faav: "favorite_border"},
        {id:"18", url: "assets/images/cover1.jpg", desc: " Harmony ", price: "2999", type: "cover", product_arr_time: "2-3 days", avlbl: true, faav: "favorite_border"},
        {id:"19", url: "assets/images/cover2.jpg", desc: " Wonder  ", price: "2399", type: "cover", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"20", url: "assets/images/textile2.jpg", desc: " VelvoQuest", price: "2899", type: "sheets", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"},
        {id:"21", url: "assets/images/cover3.jpg", desc: " Palace  ", price: "2999.", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"22", url: "assets/images/textile3.jpg", desc: " Necessary", price: "4999", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"23", url: "assets/images/cover4.jpg", desc: " Cosmix", price: "2199", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"24", url: "assets/images/textile4.jpg", desc: " AngelCharm  ", price: "1899", type: "sheets", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"25", url: "assets/images/cover5.jpg", desc: " Vine", price: "1199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"26", url: "assets/images/textile5.jpg", desc: " WellCushy", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"27", url: "assets/images/textile6.jpg", desc: " PillowSiesta  ", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"28", url: "assets/images/textile7.jpg", desc: " Moldex  ", price: "1899", type: "sheets", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"29", url: "assets/images/cover6.jpg", desc: " TheraPlume  ", price: "2199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"30", url: "assets/images/textile8.jpg", desc: " ReliefWynk", price: "1899", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
       
      ];
    
      var vvalue = filterValue.trim().toLowerCase();
    
      this.dataBedroom = tofilter.filter(s => ((s.desc).trim().toLowerCase()).includes(vvalue) );
      console.log(this.dataBedroom);
    
    }
    
    restartFiltersB(){
      this.dataBedroom  = [
        {id:"17", url: "assets/images/textile1.jpg", desc: " Wooly  " , price: "2999", type: "sheets",  product_arr_time: "2-4 days", avlbl: false, faav: "favorite_border"},
        {id:"18", url: "assets/images/cover1.jpg", desc: " Harmony ", price: "2999", type: "cover", product_arr_time: "2-3 days", avlbl: true, faav: "favorite_border"},
        {id:"19", url: "assets/images/cover2.jpg", desc: " Wonder  ", price: "2399", type: "cover", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"20", url: "assets/images/textile2.jpg", desc: " VelvoQuest", price: "2899", type: "sheets", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"},
        {id:"21", url: "assets/images/cover3.jpg", desc: " Palace  ", price: "2999.", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"22", url: "assets/images/textile3.jpg", desc: " Necessary", price: "4999", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"23", url: "assets/images/cover4.jpg", desc: " Cosmix", price: "2199", type: "cover", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"24", url: "assets/images/textile4.jpg", desc: " AngelCharm  ", price: "1899", type: "sheets", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"25", url: "assets/images/cover5.jpg", desc: " Vine", price: "1199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"26", url: "assets/images/textile5.jpg", desc: " WellCushy", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"27", url: "assets/images/textile6.jpg", desc: " PillowSiesta  ", price: "1899", type: "sheets",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"28", url: "assets/images/textile7.jpg", desc: " Moldex  ", price: "1899", type: "sheets", product_arr_time: "1-3 days", avlbl: true, faav: "favorite_border"},
        {id:"29", url: "assets/images/cover6.jpg", desc: " TheraPlume  ", price: "2199", type: "cover",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"30", url: "assets/images/textile8.jpg", desc: " ReliefWynk", price: "1899", type: "sheets",  product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
       
      ];
    }

    ////////////// BATHROOM LOUNGE + FILTERS //////////////

    dataBathroom = [
      {id:"31", url: "assets/images/floormat1.jpg", desc: " Warmed  " , price: "2999", type: "floormat",  product_arr_time: "1-3 days", avlbl: false, faav: "favorite_border"},
      {id:"32", url: "assets/images/towel1.jpg", desc: " Individual", price: "2999", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"33", url: "assets/images/floormat3.jpg", desc: " Pears ", price: "2399", type: "floormat", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"  },
      {id:"34", url: "assets/images/towel2.jpg", desc: " Lean", price: "2899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"35", url: "assets/images/towel3.jpg", desc: " Striped", price: "2999", type: "towel", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
      {id:"36", url: "assets/images/floormat2.jpg", desc: " Nappes", price: "4999", type: "floormat",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
      {id:"37", url: "assets/images/floormat4.jpg", desc: " Synovial", price: "2199", type: "floormat", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"38", url: "assets/images/towel4.jpg", desc: " Somatic", price: "1899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"39", url: "assets/images/floormat5.jpg", desc: " Habitat", price: "1199", type: "floormat",  product_arr_time: "5 days", avlbl: true, faav: "favorite_border"  },
      {id:"40", url: "assets/images/towel5.jpg", desc: " Shingle", price: "1899", type: "towel",  product_arr_time: "2-5 days", avlbl: true, faav: "favorite_border"},
      {id:"41", url: "assets/images/floormat6.jpg", desc: " Fluffy  ", price: "1899", type: "floormat",  product_arr_time: "8 days", avlbl: true, faav: "favorite_border"},
      {id:"42", url: "assets/images/towel6.jpg", desc: " Pebbled ", price: "1899", type: "towel", product_arr_time: "2-7 days", avlbl: true, faav: "favorite_border"  }
    ];
    
    doFilter3(typecc : any){
      var tofilter = [
        {id:"31", url: "assets/images/floormat1.jpg", desc: " Warmed  " , price: "2999", type: "floormat",  product_arr_time: "1-3 days", avlbl: false, faav: "favorite_border"},
        {id:"32", url: "assets/images/towel1.jpg", desc: " Individual", price: "2999", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"33", url: "assets/images/floormat3.jpg", desc: " Pears ", price: "2399", type: "floormat", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"  },
        {id:"34", url: "assets/images/towel2.jpg", desc: " Lean", price: "2899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"35", url: "assets/images/towel3.jpg", desc: " Striped", price: "2999", type: "towel", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"36", url: "assets/images/floormat2.jpg", desc: " Nappes", price: "4999", type: "floormat",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
        {id:"37", url: "assets/images/floormat4.jpg", desc: " Synovial", price: "2199", type: "floormat", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"38", url: "assets/images/towel4.jpg", desc: " Somatic", price: "1899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"39", url: "assets/images/floormat5.jpg", desc: " Habitat", price: "1199", type: "floormat",  product_arr_time: "5 days", avlbl: true, faav: "favorite_border"  },
        {id:"40", url: "assets/images/towel5.jpg", desc: " Shingle", price: "1899", type: "towel",  product_arr_time: "2-5 days", avlbl: true, faav: "favorite_border"},
        {id:"41", url: "assets/images/floormat6.jpg", desc: " Fluffy  ", price: "1899", type: "floormat",  product_arr_time: "8 days", avlbl: true, faav: "favorite_border"},
        {id:"42", url: "assets/images/towel6.jpg", desc: " Pebbled ", price: "1899", type: "towel", product_arr_time: "2-7 days", avlbl: true, faav: "favorite_border"  }
      ];
      this.dataBathroom = tofilter.filter(s => s.type == typecc);
      console.log(this.dataBathroom);
    }

    doFilterPriceRange3(minP : any, maxP : any){

      console.log(minP);
      console.log(maxP);

      var tofilter =[
        {id:"31", url: "assets/images/floormat1.jpg", desc: " Warmed  " , price: "2999", type: "floormat",  product_arr_time: "1-3 days", avlbl: false, faav: "favorite_border"},
        {id:"32", url: "assets/images/towel1.jpg", desc: " Individual", price: "2999", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"33", url: "assets/images/floormat3.jpg", desc: " Pears ", price: "2399", type: "floormat", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"  },
        {id:"34", url: "assets/images/towel2.jpg", desc: " Lean", price: "2899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"35", url: "assets/images/towel3.jpg", desc: " Striped", price: "2999", type: "towel", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"36", url: "assets/images/floormat2.jpg", desc: " Nappes", price: "4999", type: "floormat",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
        {id:"37", url: "assets/images/floormat4.jpg", desc: " Synovial", price: "2199", type: "floormat", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"38", url: "assets/images/towel4.jpg", desc: " Somatic", price: "1899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"39", url: "assets/images/floormat5.jpg", desc: " Habitat", price: "1199", type: "floormat",  product_arr_time: "5 days", avlbl: true, faav: "favorite_border"  },
        {id:"40", url: "assets/images/towel5.jpg", desc: " Shingle", price: "1899", type: "towel",  product_arr_time: "2-5 days", avlbl: true, faav: "favorite_border"},
        {id:"41", url: "assets/images/floormat6.jpg", desc: " Fluffy  ", price: "1899", type: "floormat",  product_arr_time: "8 days", avlbl: true, faav: "favorite_border"},
        {id:"42", url: "assets/images/towel6.jpg", desc: " Pebbled ", price: "1899", type: "towel", product_arr_time: "2-7 days", avlbl: true, faav: "favorite_border"  }
      ];

      this.dataBathroom = tofilter.filter(s =>  Number(s.price) > minP && Number(s.price) < maxP);
      console.log(this.dataBathroom);
    }

    searchFilter3(filterValue: string){

      var tofilter  =[
        {id:"31", url: "assets/images/floormat1.jpg", desc: " Warmed  " , price: "2999", type: "floormat",  product_arr_time: "1-3 days", avlbl: false, faav: "favorite_border"},
        {id:"32", url: "assets/images/towel1.jpg", desc: " Individual", price: "2999", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"33", url: "assets/images/floormat3.jpg", desc: " Pears ", price: "2399", type: "floormat", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"  },
        {id:"34", url: "assets/images/towel2.jpg", desc: " Lean", price: "2899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"35", url: "assets/images/towel3.jpg", desc: " Striped", price: "2999", type: "towel", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
        {id:"36", url: "assets/images/floormat2.jpg", desc: " Nappes", price: "4999", type: "floormat",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
        {id:"37", url: "assets/images/floormat4.jpg", desc: " Synovial", price: "2199", type: "floormat", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"38", url: "assets/images/towel4.jpg", desc: " Somatic", price: "1899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
        {id:"39", url: "assets/images/floormat5.jpg", desc: " Habitat", price: "1199", type: "floormat",  product_arr_time: "5 days", avlbl: true, faav: "favorite_border"  },
        {id:"40", url: "assets/images/towel5.jpg", desc: " Shingle", price: "1899", type: "towel",  product_arr_time: "2-5 days", avlbl: true, faav: "favorite_border"},
        {id:"41", url: "assets/images/floormat6.jpg", desc: " Fluffy  ", price: "1899", type: "floormat",  product_arr_time: "8 days", avlbl: true, faav: "favorite_border"},
        {id:"42", url: "assets/images/towel6.jpg", desc: " Pebbled ", price: "1899", type: "towel", product_arr_time: "2-7 days", avlbl: true, faav: "favorite_border"  }
      ];

      var vvalue = filterValue.trim().toLowerCase();

      this.dataBathroom = tofilter.filter(s => ((s.desc).trim().toLowerCase()).includes(vvalue) );
      console.log(this.dataBathroom);

    }

    restartFilters3(){
      this.dataBathroom  =[
      {id:"31", url: "assets/images/floormat1.jpg", desc: " Warmed  " , price: "2999", type: "floormat",  product_arr_time: "1-3 days", avlbl: false, faav: "favorite_border"},
      {id:"32", url: "assets/images/towel1.jpg", desc: " Individual", price: "2999", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"33", url: "assets/images/floormat3.jpg", desc: " Pears ", price: "2399", type: "floormat", product_arr_time: "3 days", avlbl: true, faav: "favorite_border"  },
      {id:"34", url: "assets/images/towel2.jpg", desc: " Lean", price: "2899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"35", url: "assets/images/towel3.jpg", desc: " Striped", price: "2999", type: "towel", product_arr_time: "3-5 days", avlbl: true, faav: "favorite_border"},
      {id:"36", url: "assets/images/floormat2.jpg", desc: " Nappes", price: "4999", type: "floormat",  product_arr_time: "2 days", avlbl: true, faav: "favorite_border"  },
      {id:"37", url: "assets/images/floormat4.jpg", desc: " Synovial", price: "2199", type: "floormat", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"38", url: "assets/images/towel4.jpg", desc: " Somatic", price: "1899", type: "towel", product_arr_time: "2 days", avlbl: true, faav: "favorite_border"},
      {id:"39", url: "assets/images/floormat5.jpg", desc: " Habitat", price: "1199", type: "floormat",  product_arr_time: "5 days", avlbl: true, faav: "favorite_border"  },
      {id:"40", url: "assets/images/towel5.jpg", desc: " Shingle", price: "1899", type: "towel",  product_arr_time: "2-5 days", avlbl: true, faav: "favorite_border"},
      {id:"41", url: "assets/images/floormat6.jpg", desc: " Fluffy  ", price: "1899", type: "floormat",  product_arr_time: "8 days", avlbl: true, faav: "favorite_border"},
      {id:"42", url: "assets/images/towel6.jpg", desc: " Pebbled ", price: "1899", type: "towel", product_arr_time: "2-7 days", avlbl: true, faav: "favorite_border"  }
    ];
    }


    addToCart(dat: any){

      if(this.id != null){

        this.userService.getAllOrders()
        .pipe(first())
        .subscribe(orders => {this.orders = orders;

          let vecPostojeca ;

          this.orderModel.textil = [];

         
          if(this.orders.find(x=> x.user_id === parseInt(this.id))){

            vecPostojeca = this.orders.find(x=> x.user_id === parseInt(this.id))
            

            if(vecPostojeca.textil.find(x=> x.id === dat.id)){
              this._snackBar.open('Already in cart!', "",  {duration: 2500});
            }else{
               vecPostojeca.textil.push(dat);

              vecPostojeca.status ="Current order";


              this.userService.addOrder(vecPostojeca).subscribe((result) => {
                if(result.body){
                  this._snackBar.open('Added to cart successfully!', "",  {duration: 2500});
                }else{
                  this._snackBar.open('Try again!', "",  {duration: 2500});  }
            }); 
            }

           
          
          }else{
            this.orderModel.id= this.orders.length ? Math.max(...this.orders.map(x => x.id)) + 1 : 1;
            this.orderModel.user_id = parseInt(this.id);
            this.orderModel.textil.push(dat);

            this.orderModel.status ="Current order";
            this.userService.addOrder(this.orderModel).subscribe((result) => {
              console.log(result.body);
              if(result.body){
                this._snackBar.open('Added to cart successfully!', "",  {duration: 2500});
              }else{
                this._snackBar.open('Try again!', "",  {duration: 2500});  }
            }); 
          
         
          }

           });
    
           this._snackBar.open('Added to cart successfully!', "",  {duration: 2500});
      }else{
        this._snackBar.open('You must be logged in!', "",  {duration: 2500});
      }
    }

    addToFavorites(dat: any){

      if(this.id != null){
        this.userService.getUserById(this.id)
        .pipe(first())
        .subscribe(x => {this.favUser = x;
        
          if(this.favUser.favoritesList.find(x=> x.id === dat.id)){
            this._snackBar.open('Already in favorites!', "",  {duration: 2500});
          }else{
          
            dat.faav="favorite";
            this.favUser.favoritesList.push(dat);

            this.userService.editUser(this.favUser).subscribe((result) => {    
              if(result.body != null){
                this._snackBar.open("Successfully added to favorites!", "",  {duration: 2500});
              }else{
                this._snackBar.open("Not valid !", "",  {duration: 2500});    }
          
            })
        }
        });
      
      
      }else{
        this._snackBar.open('You must be logged in!', "",  {duration: 2500});
      }
    }


    onBuy(dat: any){

      if(this.id != null){

        this.userService.getAllOrders()
        .pipe(first())
        .subscribe(orders => {this.orders = orders;

          let vecPostojeca ;

          this.orderModel.textil = [];

         
          if(this.orders.find(x=> x.user_id === parseInt(this.id))){

            vecPostojeca = this.orders.find(x=> x.user_id === parseInt(this.id))
            

            if(vecPostojeca.textil.find(x=> x.id === dat.id)){
              this._snackBar.open('Already in cart!', "",  {duration: 2500});
            }else{
               vecPostojeca.textil.push(dat);

              vecPostojeca.status ="Current order";


              this.userService.addOrder(vecPostojeca).subscribe((result) => {
                if(result.body){
                  this._snackBar.open('Added to cart successfully!', "",  {duration: 2500});
                  window.location.href="/cart";
                }else{
                  this._snackBar.open('Try again!', "",  {duration: 2500});  }
            }); 
            }

           
          
          }else{
            this.orderModel.id= this.orders.length ? Math.max(...this.orders.map(x => x.id)) + 1 : 1;
            this.orderModel.user_id = parseInt(this.id);
            this.orderModel.textil.push(dat);

            this.orderModel.status ="Current order";
            this.userService.addOrder(this.orderModel).subscribe((result) => {
              console.log(result.body);
              if(result.body){
                this._snackBar.open('Added to cart successfully!', "",  {duration: 2500});
                window.location.href="/cart";
              }else{
                this._snackBar.open('Try again!', "",  {duration: 2500});  }
            }); 
          
         
          }

           });
    
           this._snackBar.open('Added to cart successfully!', "",  {duration: 2500});
      }else{
        this._snackBar.open('You must be logged in!', "",  {duration: 2500});
      }

    }

  }