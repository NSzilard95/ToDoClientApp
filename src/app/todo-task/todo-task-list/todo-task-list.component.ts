import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoTaskService } from 'src/app/core/services/todo-task.service';
import { TodoTask } from '../todo-task';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ListQueryType } from '../../shared/enums/list-query-type';
import { MatDialog } from '@angular/material/dialog';
import { TodoDeleteDialogComponent } from './todo-delete-dialog/todo-delete-dialog.component';
import { TodoSetDoneDialogComponent } from './todo-set-done-dialog/todo-set-done-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.scss']
})
export class TodoTaskListComponent implements OnInit {
  /**
   * The displayed columns in table
   */
  displayedColumns: string[] = ['id', 'text', 'isDone', 'actions'];

  /**
   * The todo tasks datasource for table
   */
  todoTasksDataSource: MatTableDataSource<TodoTask>;

  /**
   * Query types for dropdown list
   */
  listQueryTypes = [
    { value: ListQueryType.All, viewValue: 'All' },
    { value: ListQueryType.InProgress, viewValue: 'In progress' },
    { value: ListQueryType.Done, viewValue: 'Done' }
  ];

  /**
   * Selected query type from dropdown list
   */
  selectedQueryType = ListQueryType.All;

  /**
   * The query string for table filtering
   */
  queryString = '';

  /**
   * Material UI paginator
   */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /**
   * Material UI sort
   */
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /**
   * The constructor
   * @param todoTaskService The todo task service
   * @param dialog The Material UI dialog
   * @param snackBar The Material UI snackbar
   */
  constructor(
    private todoTaskService: TodoTaskService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  /**
   * OnInit lifecycle method
   */
  ngOnInit(): void {
    this.queryRecords();
  }

  /**
   * Event for handle filtering
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.todoTasksDataSource.filter = filterValue.trim().toLowerCase();
    this.queryString = filterValue.trim().toLowerCase();

    if (this.todoTasksDataSource.paginator) {
      this.todoTasksDataSource.paginator.firstPage();
    }
  }

  /**
   * event for handle query type change
   */
  onQueryTypeChange() {
    this.queryRecords();
  }

  /**
   * Method for handle query records
   */
  queryRecords() {
    this.todoTaskService.getForListByQueryType(this.selectedQueryType).subscribe((data: Array<TodoTask>) => {
      this.todoTasksDataSource = new MatTableDataSource<TodoTask>(data);
      this.todoTasksDataSource.paginator = this.paginator;
      this.todoTasksDataSource.sort = this.sort;

      if (this.queryString && this.queryString.length > 0) {
        this.todoTasksDataSource.filter = this.queryString.toLowerCase();
        if (this.todoTasksDataSource.paginator) {
          this.todoTasksDataSource.paginator.firstPage();
        }
      }
    }, () => {
      this.openSnackBar('Error occured at data loading.', 'Close');
    });
  }

  /**
   * Event handler for delete todo
   * @param id The todo task id
   */
  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(TodoDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result === true) {
        this.todoTaskService.delete(id).subscribe(() => {
          this.openSnackBar('Todo deleted', 'Close');
          this.queryRecords();
        }, () => {
          this.openSnackBar('Error occured during delete.', 'Close');
        });
      }
    });
  }

  /**
   * Event handler for setting done todo
   * @param id The todo task id
   */
  openSetDoneDialog(id: number) {
    const dialogRef = this.dialog.open(TodoSetDoneDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result === true) {
        this.todoTaskService.setDone(id).subscribe(() => {
          this.openSnackBar('Todo is done', 'Close');
          this.queryRecords();
        }, () => {
          this.openSnackBar('Error occured during modify.', 'Close');
        });
      }
    });
  }

  /**
   * Method for opening a snackbar
   * @param message The message string
   * @param action The action string
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
