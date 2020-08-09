import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskRoutingModule } from './todo-task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TodoDeleteDialogComponent } from './todo-task-list/todo-delete-dialog/todo-delete-dialog.component';
import { TodoSetDoneDialogComponent } from './todo-task-list/todo-set-done-dialog/todo-set-done-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoTaskRoutingModule.components, TodoDeleteDialogComponent, TodoSetDoneDialogComponent],
  imports: [
    CommonModule,
    TodoTaskRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoTaskModule { }
