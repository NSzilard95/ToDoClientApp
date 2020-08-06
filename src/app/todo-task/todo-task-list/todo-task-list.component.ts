import { Component, OnInit } from '@angular/core';
import { TodoTaskService } from 'src/app/core/services/todo-task.service';
import TodoTask from '../todo-task';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.scss']
})
export class TodoTaskListComponent implements OnInit {

  testData: Array<TodoTask>;

  constructor(private todoTaskService: TodoTaskService) { }

  ngOnInit(): void {

  }

}
