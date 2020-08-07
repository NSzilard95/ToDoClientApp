import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskRoutingModule } from './todo-task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TodoTaskService } from '../core/services/todo-task.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoTaskRoutingModule.components],
  imports: [
    CommonModule,
    TodoTaskRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    TodoTaskService
  ]
})
export class TodoTaskModule { }
