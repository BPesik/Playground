export enum Importance {
    low,
    medium,
    high,
};

export type Todo = {
    id: string;
    task: string;
    importance: Importance;
};
