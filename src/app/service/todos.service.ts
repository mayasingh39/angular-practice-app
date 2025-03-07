import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  fetchTodos() : Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get(url).pipe(map((todos: any) => todos.filter((todo: any) => !todo.completed))) ;
    // return this.httpClient.get(url) ;
  }
}
