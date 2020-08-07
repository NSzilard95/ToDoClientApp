import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoTaskService } from 'src/app/core/services/todo-task.service';
import { TodoTask } from '../todo-task';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ListQueryType } from '../../shared/enums/list-query-type';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.scss']
})
export class TodoTaskListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'text', 'isDone', 'actions'];

  todoTasks: MatTableDataSource<TodoTask>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  listQueryTypes = [
    { value: ListQueryType.All, viewValue: "All" },
    { value: ListQueryType.InProgress, viewValue: "In progress" },
    { value: ListQueryType.Done, viewValue: "Done" }
  ]

  selectedQueryType = ListQueryType.All;

  constructor(private todoTaskService: TodoTaskService) { }

  ngOnInit(): void {
    this.todoTaskService.getForListByQueryType(ListQueryType.All).subscribe((data: Array<TodoTask>) => {
      this.todoTasks = new MatTableDataSource<TodoTask>(data);
      this.todoTasks.paginator = this.paginator;
      this.todoTasks.sort = this.sort;
    }, () => {
      console.log("Error at calling api");
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.todoTasks.filter = filterValue.trim().toLowerCase();

    if (this.todoTasks.paginator) {
      this.todoTasks.paginator.firstPage();
    }
  }

  onQueryTypeChange() {
    this.todoTaskService.getForListByQueryType(this.selectedQueryType).subscribe((data: Array<TodoTask>) => {
      this.todoTasks = new MatTableDataSource<TodoTask>(data);
      this.todoTasks.paginator = this.paginator;
      this.todoTasks.sort = this.sort;
    }, () => {
      console.log("Error at calling api");
    });
  }
}
