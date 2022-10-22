import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationProfileDeleteComponent } from '@app/confirmation-profile-delete/confirmation-profile-delete.component';
import { Userr } from '@app/_models/userr';
import { UserService } from '@app/_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  id = localStorage.getItem("id");
  isAddMode: boolean;
  submitted = false;


  favUser: any;
  favorites: any;


  userFavorites;


  constructor(private userService:UserService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.id = localStorage.getItem("id");


    this.isAddMode = !this.id;

    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
        passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', passwordValidators],
        favoritesList: ['']
    });

    if (!this.isAddMode) {
    
      this.userService.getUserById(this.id)
          .pipe(first())
          .subscribe(x =>{ this.form.patchValue(x)});
    }



    this.userService.getUserById(this.id)
        .pipe(first())
        .subscribe(x => {this.favUser = x;
        this.favorites = this.favUser.favoritesList;
        })


  }

  get f() { return this.form.controls; }

  newUser: Userr = new Userr();
  me_User: Userr = new Userr();


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.newUser.id = parseInt(this.id);
    this.newUser.username = this.form.value.username;
    this.newUser.firstName = this.form.value.firstName;
    this.newUser.lastName = this.form.value.lastName;
    this.newUser.address = this.form.value.address;
    this.newUser.phone = this.form.value.phone;
    this.newUser.email = this.form.value.email;
    this.newUser.password = this.form.value.password;

    this.newUser.favoritesList = this.favorites;


    console.log(this.newUser);

    this.userService.editUser(this.newUser).subscribe((result) => {

      console.log(result.body);

      if(result.body != null){
        this.form.patchValue(result);
        this._snackBar.open("Successfully edited profile!", "",  {duration: 2500});
      }else{
        this._snackBar.open("Not valid !", "",  {duration: 2500});    }

    })

  }


  deleteUser(){


    let dialogRef = this.dialog.open(ConfirmationProfileDeleteComponent, {
    });


    dialogRef.afterClosed().subscribe((result) => {

      console.log(result);

      if(result){
         this.userService.deleteUser(this.id)
          .pipe(first())
          .subscribe(() => {
          localStorage.removeItem("id");
          console.log(this.id);
          window.location.href="/signin";
          } 
          );
      }else{
        this._snackBar.open("Deleting profile terminated!!!", "",  {duration: 2500});

      }
    })

   

  }

  deleteFavorites(faav : any){


    this.me_User.id = parseInt(this.id);
    this.me_User.username = this.favUser.username;
    this.me_User.firstName = this.favUser.firstName;
    this.me_User.lastName = this.favUser.lastName;
    this.me_User.address = this.favUser.address;
    this.me_User.phone = this.favUser.phone;
    this.me_User.email = this.favUser.email;
    this.me_User.password = this.favUser.password;

    const removeIndex = this.favUser.favoritesList.findIndex(x => x.id === faav.id);
            
    this.favUser.favoritesList.splice(removeIndex, 1);

    this.me_User.favoritesList = this.favUser.favoritesList;

    console.log(this.me_User);

    this.userService.editUser(this.me_User) // prosledjujem user id i update-ujem ga ( moram sve podatke da prosledim iz trenutnog usera i novu listu eksponata bez obrisanog)
    .subscribe((result) => {
      if(result.body != null){
        this.form.patchValue(result);
        this._snackBar.open("Successfully removed from favorites!", "",  {duration: 2500});
      }else{
        this._snackBar.open("Not valid !", "",  {duration: 2500});    }

    })

  }

}
