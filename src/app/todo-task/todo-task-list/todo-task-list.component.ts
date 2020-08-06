import { Component, OnInit } from '@angular/core';
import { TodoTaskService } from 'src/app/core/services/todo-task.service';
import { TodoTask } from '../todo-task';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.scss']
})
export class TodoTaskListComponent implements OnInit {

  todoTasks: Array<TodoTask> = [];
  displayedColumns: string[] = ['id', 'text', 'isDone', 'isDeleted'];

  constructor(private todoTaskService: TodoTaskService) { }

  ngOnInit(): void {
    this.todoTaskService.getAll().subscribe((data: any) => {
      this.todoTasks = data;
    }, (error: any) => {
      console.log("Error at calling api");
    });
  }

}
