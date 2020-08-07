import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListQueryType } from 'src/app/shared/enums/list-query-type';

@Injectable()
export class TodoTaskService {

  baseApi = 'http://localhost:49900/api/todotask';

  constructor(private http: HttpClient) { }

  getForListByQueryType(listQueryType: ListQueryType): Observable<any> {
    return this.http.get(`${this.baseApi}/GetForList/${listQueryType}`);
  }
}
