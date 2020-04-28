import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';
import { Subscription } from 'rxjs';
import { EmployeeService } from './employee.service';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
        


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription;
  title = 'agGridApp';
  columnInfo : any = [];
  rowInfo : any = [];
  private frameworkComponents;
  currentRowObj : any = {};
  updatedRowObj : any = {};
  prevRowObj : any = {};
 
  //Update row/cell
  private gridApi;
  dataUrl = '/assets/data.json';

  constructor(public dialog: MatDialog,private http:HttpClient) {
  }

  


 ngOnInit(){

    this.columnInfo = [
    {headerName: 'Emp Id', field:'EmpId', sortable: true, filter: true,cellStyle: {color: 'blue', 'text-decoration': 'underline','cursor': 'pointer'}},
    {headerName: 'Emp Name', field:'EmpName', sortable: true, filter: true},
    {headerName: 'Designation', field:'Post', sortable: true, filter: true}
  ];

//   this.rowInfo = [
//     { EmpId: '01', EmpName: 'Mayuri Gharge', Post: 'UI Developer' },
//     { EmpId: '02', EmpName: 'Rashmi Chaudhari', Post: 'QA' },
//     { EmpId: '03', EmpName: 'Nikita Kheratkar', Post: 'HR' },
//  ];


this.http.get(this.dataUrl).subscribe(data=>{
 this.rowInfo = data;
});

 
  // this.frameworkComponents = {
  //   custCell : CustomizedCellComponent
  // }
}

onGridReady(params) {

  this.gridApi = params.api;
}

onCellClicked(iVal){
  console.log("current cell value",iVal);
  if(iVal.colDef.headerName == 'Emp Id'){
    for(let i=0;i<this.rowInfo.length;i++){
      if(this.rowInfo[i].EmpId == iVal.data.EmpId){
        this.currentRowObj = this.rowInfo[i];
        this.prevRowObj = Object.assign({}, this.currentRowObj);
      }
    }
    
    console.log("ceurrent row value",this.currentRowObj);

    const dialogRef = this.dialog.open(MaterialDialogComponent, {
      width: '350px',
      data: this.currentRowObj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog closed');
      this.updatedRowObj = Object.assign({}, result);
      for(let i=0;i<this.rowInfo.length;i++){
        if(this.updatedRowObj.EmpId == this.rowInfo[i].EmpId){
          var rowNode = this.gridApi.getRowNode(i);
          //rowNode.setData(this.updatedRowObj);   //To update whole row

          //To update employee name cell
          if(this.updatedRowObj.EmpName != this.prevRowObj.EmpName){
            rowNode.setDataValue('EmpName',this.updatedRowObj.EmpName);  //To update 
          }
          try{
            var httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
            this.http.put(`${this.dataUrl}/${this.updatedRowObj.EmpId}`,this.updatedRowObj,httpOptions)
          }
          catch(error){
            console.log("Error is =====",error);
          }
                    

           //To update 'Post' cell
           if(this.updatedRowObj.Post != this.prevRowObj.Post){
            rowNode.setDataValue('Post',this.updatedRowObj.Post);  //To update employee name
          }
         
        }
      }
    });
  }
}


}
