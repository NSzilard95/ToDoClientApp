import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskService } from './services/todo-task.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TodoTaskService
  ]
})
export class CoreModule { }
