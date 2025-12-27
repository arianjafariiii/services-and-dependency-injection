import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    private loggingService = inject(LoggingService)
    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();

    addTask(taskData: {title: string, description: string}) {
        const newTask: Task = {
            ...taskData,
            id : Math.random().toString(),
            status: 'OPEN'

        };
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
        this.loggingService.log("Bla Bla Bla")
    }

    updateTaskStatus(taskId: string, taskStatus: TaskStatus) {
        this.tasks.update((oldTask) => 
            oldTask.map((task) => task.id === taskId ? {...task, status : taskStatus}: task)
        );
        this.loggingService.log("Shla Shla Shla")
    }
}