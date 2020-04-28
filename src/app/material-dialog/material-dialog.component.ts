import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  editFlag = false;

  ngOnInit() {
  }
  
  closeFun(iData): void {
    this.dialogRef.close(iData);
  }

  editFunc(){
    this.editFlag = true;
  }

  saveFunc(){
    this.editFlag = false;
  }
  

}
