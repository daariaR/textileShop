import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Userr } from '@app/_models/userr';
import { UserService } from '@app/_services/user.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  hide = true;
  userModel = new Userr();

  users: any;

  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.getAll()
    .pipe(first())
    .subscribe(users => this.users = users);
  }


  onSubmit(f: NgForm){
    
    if (this.users.find(x => x.username === this.userModel.username)) {
      this._snackBar.open('Username "' + this.userModel.username + '" is already taken"', "",  {duration: 2500});
    }else{

      this.userModel.id= this.users.length ? Math.max(...this.users.map(x => x.id)) + 1 : 1;

      this.userModel.favoritesList = [];

      console.log(this.userModel)

      this.userService.register(this.userModel).subscribe((result) => {
        console.log(result.body);
        if(result.body){
          this._snackBar.open('Successfully created profile !', "",  {duration: 2500});
        }else{
          this._snackBar.open('Try again', "",  {duration: 2500});
        }
      })

    }



   
  }

}
