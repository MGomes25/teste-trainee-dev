import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodoService } from '../shared/services/todo.service';
import { orderBy } from 'lodash';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  showCompletedTasks: boolean = true;

  @ViewChild(NewTaskComponent) newTaskComponent!: NewTaskComponent;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  ordenar() {
    this.todos = orderBy(this.todos, 'title', 'asc');
  }

  clearAll() {
    this.todoService.clearAll();
    this.loadTodos();
  }

  clearCompletedTasks() {
    this.todoService.clearCompletedTasks();
    this.loadTodos();
  }

  toggleCompletedTasks() {
    this.showCompletedTasks = !this.showCompletedTasks;
    this.todos = this.filteredTodos();
  }

  filteredTodos() {
    return this.showCompletedTasks ? this.todos : this.todos.filter(todo => !todo.completed);
  }

  get labelClearAll() {
    return 'Limpar todas as tarefas';
  }
}
