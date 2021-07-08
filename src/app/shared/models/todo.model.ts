export interface Todo {
    createdAt: Date;
    name: string;
    description: string;
    dateComplete: Date;
    status: boolean;
    priority: number;
}

export interface SaveTodo extends Todo {
    id: number;
}

export enum Priority {
    Low = 1,
    Middle = 2,
    High = 3
}