import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialSharedModule } from './ng-material-shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMaterialSharedModule
  ],
  exports: [
    CommonModule,
    NgMaterialSharedModule
  ]
})
export class SharedModule { }
