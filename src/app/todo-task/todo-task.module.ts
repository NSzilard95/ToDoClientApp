import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskRoutingModule } from './todo-task-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TodoTaskRoutingModule.components],
  imports: [
    CommonModule,
    TodoTaskRoutingModule,
    SharedModule
  ]
})
export class TodoTaskModule { }
