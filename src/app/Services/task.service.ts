import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITask } from "../Interfaces/task.interface";

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
}