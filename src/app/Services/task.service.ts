import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITask } from "../Interfaces/task.interface";
import { ITaskFormControls } from "../Interfaces/task-form-controls.interface";
import { TaskStatusEnum } from "../enums/task.status.enum";
import { generateUniqueIdWithTimestamp } from "../utils/generate-unique-id-with-timestamp";

@Injectable({
    providedIn: "root",
})

export class TaskService {
    // Tarefas em A fazer
    private todoTasks$ = new BehaviorSubject<ITask[]>([]);
    readonly todoTasks = this.todoTasks$.asObservable();

    // Tarefas em Andamento
    private doingTasks$ = new BehaviorSubject<ITask[]>([]);
    readonly doingTasks = this.doingTasks$.asObservable();

    // Tarefas em Concluído
    private doneTasks$ = new BehaviorSubject<ITask[]>([]);
    readonly doneTasks = this.doneTasks$.asObservable();

    addTask(taskInfos: ITaskFormControls) {
        const newTask: ITask = {
            ...taskInfos,
            status: TaskStatusEnum.TODO,
            id: generateUniqueIdWithTimestamp(),
            comments: [],
        };
        const currentTasks = this.todoTasks$.value;
        this.todoTasks$.next([...currentTasks, newTask]);
    }
}