import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-profile-delete',
  templateUrl: './confirmation-profile-delete.component.html',
  styleUrls: ['./confirmation-profile-delete.component.less']
})
export class ConfirmationProfileDeleteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmationProfileDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


    decision: boolean;

    ngOnInit(): void {
    }


    onCancel(): void {
      this.dialogRef.close();
    }

    onConfirm(): void {
    }

}
