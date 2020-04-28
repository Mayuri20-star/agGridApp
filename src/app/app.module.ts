import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';




//import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent,
    CustomizedCellComponent,
    MaterialDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([CustomizedCellComponent]),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [MaterialDialogComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
