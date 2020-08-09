import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoTaskService } from 'src/app/core/services/todo-task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-task-create',
  templateUrl: './todo-task-create.component.html',
  styleUrls: ['./todo-task-create.component.scss']
})
export class TodoTaskCreateComponent implements OnInit {

  /**
   * The create form
   */
  todoCreateForm: FormGroup;

  /**
   * Loading variable for button
   */
  loading = false;

  /**
   * The constructor
   * @param todoTaskService The todo task service
   * @param formBuilder The form builder
   * @param router The router instance
   * @param snackBar The MAterial UI snackbar
   */
  constructor(
    private todoTaskService: TodoTaskService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  /**
   * OnInit lifecycle method
   */
  ngOnInit() {
    this.todoCreateForm = this.formBuilder.group({
      todoText: ['', Validators.required]
    });
  }

  /**
   * Event handler for sumbitting the form
   */
  onSubmit() {
    if (this.todoCreateForm.invalid) {
      return;
    }

    this.loading = true;

    this.todoTaskService.create(this.formControls.todoText.value).subscribe((data) => {
      this.openSnackBar('Todo is created', 'Close');
      this.router.navigate(['todo']);
    }, () => {
      this.loading = false;
      this.openSnackBar('Error occured during create.', 'Close');
    });
  }

  /**
   * Getter for form controls
   */
  get formControls() { return this.todoCreateForm.controls; }

  /**
   * Error handler
   * @param control The controle string
   * @param error The error type in string
   */
  public errorHandling = (control: string, error: string) => {
    return this.todoCreateForm.controls[control].hasError(error);
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
