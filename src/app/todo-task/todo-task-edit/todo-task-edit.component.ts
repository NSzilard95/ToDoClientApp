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

  id: number;
  entity: TodoTask;
  todoEditForm: FormGroup;
  loading = false;

  constructor(
    private todoTaskService: TodoTaskService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +params.get("id");
    })
  }

  ngOnInit() {
    this.todoEditForm = this.formBuilder.group({
      todoText: ['', Validators.required]
    });
    this.todoTaskService.getById(this.id).subscribe((data: TodoTask) => {
      this.entity = data;
      this.todoEditForm.setValue({todoText: data.text});
    }, (error: any) => {
      console.log('error occured at getbyid');
    });
  }

  onSubmit() {
    if (this.todoEditForm.invalid) {
      return;
    }

    this.loading = true;

    this.entity.text = this.formControls.todoText.value;
    this.todoTaskService.edit(this.entity).subscribe((data) => {
      this.loading = false;
      this.openSnackBar("Todo is modified", "Close");
      this.router.navigate(['todo']);
    }, (error) => {
      this.loading = false;
      this.openSnackBar("Error occured during modify.", "Close");
    })
  }

  get formControls() { return this.todoEditForm.controls; }

  public errorHandling = (control: string, error: string) => {
    return this.todoEditForm.controls[control].hasError(error);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
