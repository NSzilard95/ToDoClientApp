import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListQueryType } from 'src/app/shared/enums/list-query-type';
import { TodoTask } from 'src/app/todo-task/todo-task';

/**
 * The todo task service
 */
@Injectable()
export class TodoTaskService {
  /**
   * The base api string
   */
  baseApi = 'http://localhost:49900/api/todotask';

  /**
   * The constructor
   * @param http The http client
   */
  constructor(private http: HttpClient) { }

  /**
   * Lists todos by query type
   * @param listQueryType the list query type
   */
  getForListByQueryType(listQueryType: ListQueryType): Observable<TodoTask[]> {
    return this.http.get<TodoTask[]>(`${this.baseApi}/GetForList/${listQueryType}`);
  }

  /**
   * Delete todo API call
   * @param id The todo id
   */
  delete(id: number): Observable<TodoTask> {
    return this.http.delete<TodoTask>(`${this.baseApi}/${id}`);
  }

  /**
   * Setting done todo API call
   * @param id The todo id
   */
  setDone(id: number): Observable<TodoTask> {
    return this.http.post<TodoTask>(`${this.baseApi}/${id}`, null);
  }

  /**
   * Gets a todo by id
   * @param id The todo id
   */
  getById(id: number): Observable<TodoTask> {
    return this.http.get<TodoTask>(`${this.baseApi}/${id}`);
  }

  /**
   * Create todo API call
   * @param todoText The todo text
   */
  create(todoText: string): Observable<TodoTask> {
    const entity = new TodoTask(0, todoText, false, false);
    return this.http.post<TodoTask>(`${this.baseApi}`, entity);
  }

  /**
   * The edit todo API call
   * @param entity The todo entity
   */
  edit(entity: TodoTask): Observable<TodoTask> {
    return this.http.put<TodoTask>(`${this.baseApi}`, entity);
  }
}
