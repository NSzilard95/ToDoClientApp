import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTaskListComponent } from './todo-task-list/todo-task-list.component';
import { TodoTaskCreateComponent } from './todo-task-create/todo-task-create.component';
import { TodoTaskEditComponent } from './todo-task-edit/todo-task-edit.component';


const routes: Routes = [
  { path: 'todo', component: TodoTaskListComponent },
  { path: 'todo/create', component: TodoTaskCreateComponent },
  { path: 'todo/edit/:id', component: TodoTaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoTaskRoutingModule {
  static components = [TodoTaskListComponent, TodoTaskCreateComponent, TodoTaskEditComponent];
}
