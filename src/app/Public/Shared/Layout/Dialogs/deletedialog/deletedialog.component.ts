
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent implements OnInit {

  deleteText : string = ''
  constructor(@Inject(MAT_DIALOG_DATA) private data : any ,  private dialogRef : MatDialogRef<DeletedialogComponent> , private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.deleteText = this.data
  }
  dialogNo(){
    this.dialogRef.close({result : false})
  }
  dialogYes(){
    this.dialogRef.close({result : true})
    this.snackbar.open(`${ this.deleteText} deleted successfully`, '' ,  {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
