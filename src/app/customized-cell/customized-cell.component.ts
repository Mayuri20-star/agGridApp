import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customized-cell',
  templateUrl: './customized-cell.component.html',
  styleUrls: ['./customized-cell.component.scss']
})
export class CustomizedCellComponent implements OnInit {
//   subscription: Subscription;
//   cellValue:any;
//   currentRowObj : any = {};
// //   rowData = [
// //     { EmpId: '01', EmpName: 'Mayuri Gharge', Post: 'UI Developer' },
// //     { EmpId: '02', EmpName: 'Rashmi Chaudhari', Post: 'QA' },
// //     { EmpId: '03', EmpName: 'Nikita Kheratkar', Post: 'HR' },
// //  ];

// rowData = [];

  constructor(public dialog: MatDialog,public employeeService:EmployeeService) { }
  
//     this.employeeService.subject1.subscribe(data => {
//       if (data) {
//         this.rowData = [];
//         for(let i=0;i<data.length;i++){
//           this.rowData.push(data[i]);
//         }
//       } 
//     });
//   }

//   agInit(params:any){
//     this.cellValue = params.value;
//   }

//   refresh(params:any):boolean{
//      this.cellValue = params.value;
//      return true;
//    }

  ngOnInit(){
  }

  
//   onCellClicked(iVal){
//     console.log("current cell value",iVal);
//     for(let i=0;i<this.rowData.length;i++){
//       if(this.rowData[i].EmpId == iVal){
//         this.currentRowObj = this.rowData[i];
//       }
//     }
    
//     console.log("ceurrent row value",this.currentRowObj);

//     const dialogRef = this.dialog.open(MaterialDialogComponent, {
//       width: '350px',
//       data: this.currentRowObj
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.currentRowObj = result;
//       this.employeeService.addToCart(this.currentRowObj);
//     });
//   }
  
  
}
