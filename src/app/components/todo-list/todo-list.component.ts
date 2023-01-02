import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]> | undefined;
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todos = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.remove(id);
  }
}
