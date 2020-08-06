import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

const materialModules = [
  MatButtonModule,
  MatSliderModule
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
