import { Component, inject } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../../Services/task.service';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask } from '../../Interfaces/task.interface';
import { A } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCardComponent, CdkDropList, CdkDrag, AsyncPipe],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css'
})
export class TaskListSectionComponent {

  public readonly _taskService = inject(TaskService);
todoTasks: unknown;

  drop(event: CdkDragDrop<ITask[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);}
      else{
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
          );
      }
    }
  }

