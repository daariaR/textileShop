import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HistoryModel } from '@app/_models/HistoryModel';
import { UserService } from '@app/_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  orders: any;
  myOrders: any;

  id = localStorage.getItem("id");

  myTextils: any;
  medju: any;

  sum=0;
  itemNu=0;

  historyList: any;
  myHistory: any;
  finalHistory: any;


  valueNumber = 1;

  constructor(private userService:UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.userService.getAllOrders()
    .pipe(first())
    .subscribe(orders => {this.orders = orders
      this.myOrders = this.orders.find(x => x.user_id === parseInt(this.id))
      this.myTextils = this.myOrders.textil;

      this.myTextils.forEach((element : any )=> {
        this.sum += parseInt(element.price);
      })
      this.itemNu = this.myTextils.length
    })

    this.userService.getHistory()
    .pipe(first())
    .subscribe(historyList => {this.historyList = historyList

          this.myHistory = this.historyList.filter(x => x.user_id === parseInt(this.id))

          this.finalHistory = this.myHistory.map(x => x.sentItems );
          console.log( this.finalHistory);
    })

  }


  povecaj(){
    this.valueNumber++;
  }

  smanji(){
    this.valueNumber--;
  }


  removeItem(t){
    
    const removeIndex = this.myOrders.textil.findIndex(x => x.id === t.id);
            
    this.myOrders.textil.splice(removeIndex, 1);

    this.userService.deleteOrder(this.myOrders)
    .pipe(first())
    .subscribe(() => this.myOrders = this.myOrders.textil.filter(x => x.id !== t.id));

  }

  checkout(myTextilss: any){
    if(this.sum===0){
      this._snackBar.open('You have no items in shopping cart!', "",  {duration: 2500});
    }else{

      this.userService.getHistory()
      .pipe(first())
      .subscribe(historyList => {this.historyList = historyList;
     
        if(this.historyList.find(x=> x.user_id === parseInt(this.id))){


          let mojaIstorija = this.historyList.find(x=> x.user_id === parseInt(this.id));

          mojaIstorija.sentItems = mojaIstorija.sentItems.concat(myTextilss);

          this.userService.addHistory(mojaIstorija).subscribe((result) => {
            console.log(result.body);
          });
        }else{

           let historyObject = new HistoryModel();

            historyObject.id = this.historyList.length ? Math.max(...this.historyList.map(x => x.id)) + 1 : 1;

            historyObject.sentItems = myTextilss;

            historyObject.user_id = parseInt(this.id);

            console.log( historyObject);

            this.userService.addHistory(historyObject).subscribe((result) => {
              console.log(result.body);
            }); 
         
        }

         
      })

      this.userService.getHistory()
      .pipe(first())
      .subscribe(historyList => {this.historyList = historyList
  
            this.myHistory = this.historyList.filter(x => x.user_id === parseInt(this.id))
            this.finalHistory = this.myHistory.map(x => x.sentItems );

      })


      this.myTextils = [];

      this.userService.removeOrder(this.myOrders.id)
      .pipe(first())
      .subscribe(() => this.myTextils = []);
      
      this._snackBar.open('Order sent successfully!', "",  {duration: 2500});

     
    }
    
  }



}
