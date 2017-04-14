import { Task } from 'ts-task';

export const ServerTask: Task = new Task('server', (...args: any[]) => {
    console.log('In server start task!');
});
