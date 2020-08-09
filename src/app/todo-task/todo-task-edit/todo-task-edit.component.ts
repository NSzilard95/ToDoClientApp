import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoTaskService } from 'src/app/core/services/todo-task.service';
import { TodoTask } from '../todo-task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-task-edit',
  templateUrl: './todo-task-edit.component.html',
  styleUrls: ['./todo-task-edit.component.scss']
})
export class TodoTaskEditComponent implements OnInit {
  /**
   * The todo id from route params
   */
  id: number;

  /**
   * The todo task entity
   */
  entity: TodoTask;

  /**
   * The create form
   */
  todoEditForm: FormGroup;

  /**
   * Loading variable for button
   */
  loading = false;

  /**
   * The constructor
   * @param todoTaskService The todo task service
   * @param formBuilder The form builder
   * @param activatedRoute The activated route
   * @param router The router instance
   * @param snackBar The MAterial UI snackbar
   */
  constructor(
    private todoTaskService: TodoTaskService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +params.get('id');
    });
  }

  /**
   * OnInit lifecycle method
   */
  ngOnInit() {
    this.todoEditForm = this.formBuilder.group({
      todoText: ['', Validators.required]
    });

    this.todoTaskService.getById(this.id).subscribe((data: TodoTask) => {
      this.entity = data;
      this.todoEditForm.setValue({todoText: data.text});
    }, () => {
      this.openSnackBar('Error occured at data loading.', 'Close');
    });
  }

  /**
   * Event handler for sumbitting the form
   */
  onSubmit() {
    if (this.todoEditForm.invalid) {
      return;
    }

    this.loading = true;
    this.entity.text = this.formControls.todoText.value;

    this.todoTaskService.edit(this.entity).subscribe((data) => {
      this.loading = false;
      this.openSnackBar('Todo is modified', 'Close');
      this.router.navigate(['todo']);
    }, () => {
      this.loading = false;
      this.openSnackBar('Error occured during modify.', 'Close');
    });
  }

  /**
   * Getter for form controls
   */
  get formControls() { return this.todoEditForm.controls; }

  /**
   * Error handler
   * @param control The controle string
   * @param error The error type in string
   */
  public errorHandling = (control: string, error: string) => {
    return this.todoEditForm.controls[control].hasError(error);
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
