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
  todoCreateForm: FormGroup;
  loading = false;

  constructor(
    private todoTaskService: TodoTaskService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.todoCreateForm = this.formBuilder.group({
      todoText: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.todoCreateForm.invalid) {
      return;
    }

    this.loading = true;

    this.todoTaskService.create(this.formControls.todoText.value).subscribe((data) => {
      this.openSnackBar("Todo is created", "Close");
      this.router.navigate(['todo']);
    }, (error) => {
      this.loading = false;
      this.openSnackBar("Error occured during create.", "Close");
    })
  }

  get formControls() { return this.todoCreateForm.controls; }

  public errorHandling = (control: string, error: string) => {
    return this.todoCreateForm.controls[control].hasError(error);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
