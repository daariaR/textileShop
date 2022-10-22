import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Userr } from '@app/_models/userr';
import { UserService } from '@app/_services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  hide = true;
  userModel : Userr = new Userr();
  message:any;
  currentUser: Userr | any;
  
  user_id : any;


  constructor(private userService: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.userService.login(this.userModel).subscribe((result) => {
      console.log(result.body);

      if(result.body){

      this.userService.returnUsername(this.userModel.username).subscribe((result) => {
        console.log(result);


        localStorage.setItem("id",JSON.stringify(result)) ;

        console.log(result)

        this.user_id = (Number(localStorage.getItem("id"))) ;

        this.userService.getUserById(this.user_id).subscribe((value) => {
          this.currentUser = value;
          })
    
      })
        window.location.href="/profile";
      }else{
        this._snackBar.open('Username or password not valid !', "",  {duration: 2500});
      }
    })
  }



}
