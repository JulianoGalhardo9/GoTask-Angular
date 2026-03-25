import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { ITask } from "../Interfaces/task.interface";
import { ITaskFormControls } from "../Interfaces/task-form-controls.interface";
import { TaskStatusEnum } from "../enums/task.status.enum";
import { generateUniqueIdWithTimestamp } from "../utils/generate-unique-id-with-timestamp";
import { TaskStatus } from "../types/task.status";

@Injectable({
    providedIn: "root",
})

export class TaskService {
    // Tarefas em A fazer
    private todoTasks$ = new BehaviorSubject<ITask[]>([]);
    readonly todoTasks = this.todoTasks$.asObservable()
    .pipe(map((tasks) => structuredClone(tasks)),);

    // Tarefas em Andamento
    private doingTasks$ = new BehaviorSubject<ITask[]>([]);
    readonly doingTasks = this.doingTasks$.asObservable()
    .pipe(map((tasks) => structuredClone(tasks)),);;

    // Tarefas em Concluído
    private doneTasks$ = new BehaviorSubject<ITask[]>([]);
    readonly doneTasks = this.doneTasks$.asObservable()
    .pipe(map((tasks) => structuredClone(tasks)),);;

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

    updateTaskStatus(taskId: string, taskCurrentStatus: TaskStatus, taskNextStatus: TaskStatus) {
        const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
        const nextTaskStatus = this.getTaskListByStatus(taskNextStatus);
        const currentTask = currentTaskList.value.find(task => task.id === taskId);

        if(currentTask){
            // atualizando o status da tarefa
            currentTask.status = taskNextStatus;

            // removendo a tarefa da lista atual
            const currentTaskListWithoutTask = currentTaskList.value.filter(task => task.id !== taskId);
            currentTaskList.next([...currentTaskListWithoutTask]);

            // adicionando a tarefa na nova lista
            nextTaskStatus.next([...nextTaskStatus.value, { ...currentTask }]);
        }
    }

    private getTaskListByStatus(status: TaskStatus) {
        const taskListObj = {
            [TaskStatusEnum.TODO]: this.todoTasks$,
            [TaskStatusEnum.DOING]: this.doingTasks$,
            [TaskStatusEnum.DONE]: this.doneTasks$,
        };
        return taskListObj[status];
    }
}