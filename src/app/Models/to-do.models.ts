export class ToDo {
    id: number;
    task: string;
    status: boolean;

    constructor(id: number, task: string, status: boolean) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
}