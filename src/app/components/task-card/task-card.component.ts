import { Component, inject, Input } from '@angular/core';
import { ModalControllerService } from '../../Services/modal-controller.service';
import { ITask } from '../../Interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input({required: true}) task!: ITask;
  private readonly _modalControllerService = inject(ModalControllerService);

  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: 'Nome tarefa',
      description: 'Descrição da tarefa',
    });

    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa editada:', taskForm);
    });
  }
}
