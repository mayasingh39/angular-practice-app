import { Component, inject } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private todosService = inject(TodosService);
  completedTodos: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(todos => {
      this.completedTodos = todos; // ✅ Store filtered data
    });
  }
}
