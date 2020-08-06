import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


const materialModules = [
  MatButtonModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ...materialModules
  ]
})
export class NgMaterialSharedModule { }
