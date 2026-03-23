import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ITaskFormModalData } from '../../Interfaces/task-form-modal-data.components';

@Component({
  selector: 'app-task-form-modal',
  imports: [],
  templateUrl: './task-form-modal.component.html',
  styleUrl: './task-form-modal.component.css'
})
export class TaskFormModalComponent {
  readonly _data: ITaskFormModalData = inject(DIALOG_DATA);
}
