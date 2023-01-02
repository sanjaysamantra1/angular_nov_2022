import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}
  addToDo(todoText: string) {
    this.todoService.create({ id: 3, value: todoText });
  }
}
