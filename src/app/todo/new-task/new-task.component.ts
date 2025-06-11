import { Component } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from '../../shared/services/todo.service';
import { Filter } from 'bad-words';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTaskTitle: string = '';
  errorMessage: string = '';
  editingTodoId: number | null = null;
  private filter: Filter;

  constructor(private todoService: TodoService, private alertService: AlertService) {
    this.filter = new Filter();
    this.filter.addWords('porra', 'merda', 'caralho', 'puta', 'fdp', 'bosta', 'cacete', 'desgraça', 'viado', 'puta que pariu');
  }

  addTask(event?: Event): void {
    if (event) event.preventDefault();
    this.errorMessage = '';
    const rawInput = this.newTaskTitle.trim();
    if (!rawInput) return;

    // Verifica se há palavras obscenas
    const titles = rawInput.split('|').map(t => t.trim()).filter(t => t.length > 0);
    for (const title of titles) {
      const words = title.toLowerCase().split(/\s+/);
      for (const word of words) {
        if (this.filter.isProfane(word)) {
          this.alertService.error('Não é permitido cadastrar tarefas com palavras obscenas.');
          return;
        }
      }

      if (this.editingTodoId !== null) {
        // Atualiza tarefa existente
        const updatedTodo: Todo = {
          id: this.editingTodoId,
          title,
          completed: false
        };
        this.todoService.updateTodo(updatedTodo);
        this.alertService.success('Tarefa atualizada com sucesso!');
        this.editingTodoId = null;
      } else {
        // Adiciona nova tarefa
        const newTodo: Todo = {
          id: this.todoService.getTodoNewId(),
          title,
          completed: false
        };
        this.todoService.addTodo(newTodo);
        this.alertService.success('Tarefa adicionada com sucesso!');
      }
    }

    this.newTaskTitle = '';
  }

  // Chamado pelo componente filho
  editTask(todo: Todo) {
    this.newTaskTitle = todo.title;
    this.editingTodoId = todo.id;
  }
}
