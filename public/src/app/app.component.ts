import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  //title = 'my-app';

  title = 'My First Angular App';

  todos: Todo[];
  
  constructor(private todoService: TodoService){

  }

  getTodos(): void{
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit(): void{
    this.getTodos();
  }
}
