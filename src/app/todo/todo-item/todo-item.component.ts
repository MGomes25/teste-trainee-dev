import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from '../../shared/services/todo.service';
import { AlertService } from '../../shared/services/alert.service';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() newTaskComponent!: NewTaskComponent;

  constructor(private todoService: TodoService, private alertService: AlertService) {}

  deleteTodo(): void {
    this.alertService.confirm('Deseja mesmo excluir essa tarefa?').then(result => {
      if (result.isConfirmed) {
        this.todoService.deleteTodo(this.todo.id);
      }
    });
  }

  onTaskChecked(): void {
    this.todoService.updateTodo(this.todo);
  }

  editTodo(): void {
    this.newTaskComponent.editTask(this.todo);
  }
}
