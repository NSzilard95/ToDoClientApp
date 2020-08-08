import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListQueryType } from 'src/app/shared/enums/list-query-type';
import { TodoTask } from 'src/app/todo-task/todo-task';

@Injectable()
export class TodoTaskService {

  baseApi = 'http://localhost:49900/api/todotask';

  constructor(private http: HttpClient) { }

  getForListByQueryType(listQueryType: ListQueryType): Observable<any> {
    return this.http.get(`${this.baseApi}/GetForList/${listQueryType}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseApi}/${id}`)
  }

  setDone(id: number): Observable<any> {
    return this.http.post(`${this.baseApi}/${id}`, null);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.baseApi}/${id}`);
  }

  create(todoText: string): Observable<any> {
    let entity = new TodoTask(0, todoText, false, false);
    return this.http.post(`${this.baseApi}`, entity);
  }

  edit(entity: TodoTask): Observable<any> {
    return this.http.put(`${this.baseApi}`, entity);
  }
}
