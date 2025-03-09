import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Todo } from '../model/todo.model';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,  // Add this line
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss', 
  providers: []
})
export class HomeComponent {
  private readonly todosService = inject(TodosService);
  completedTodos: any[] = [];
  loader: boolean;
  constructor() {
    this.loader = true;

  }

  ngOnInit(): void {
    // Fetch todos and filter completed ones
    this.todosService.getTodos()
    .pipe(tap((todos: Todo[]) => { this.completedTodos = todos;}))
    .subscribe((todos: Todo[]) => { this.loader = false});
    //  .subscribe(todos => {
    //   this.loader = false;
    //    this.completedTodos = todos.filter(todo => todo.completed);
    //  });


    //  this.todosService.getTodos()
    //  .subscribe(todos => {
    //    this.completedTodos = todos.filter(todo => todo.completed);
    //  });

    
  }
}
