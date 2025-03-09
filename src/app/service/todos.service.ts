import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../model/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodos() : Observable<Todo[]>{    
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    // .pipe(map((todos: any) => todos.filter((todo: any) => !todo.completed))) ;    
  }
}
