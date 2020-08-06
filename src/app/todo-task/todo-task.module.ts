import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskRoutingModule } from './todo-task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TodoTaskService } from '../core/services/todo-task.service';


@NgModule({
  declarations: [TodoTaskRoutingModule.components],
  imports: [
    CommonModule,
    TodoTaskRoutingModule,
    SharedModule
  ],
  providers: [
    TodoTaskService
  ]
})
export class TodoTaskModule { }
