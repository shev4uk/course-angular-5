export interface Todo {
    createdAt: Date;
    name: string;
    description: string;
    dateComplete: Date;
    status: boolean;
    priority: number;
    id: number;
}