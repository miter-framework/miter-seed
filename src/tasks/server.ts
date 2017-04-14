import { Task } from 'ts-task';
import { Miter } from 'miter';

export const ServerTask: Task = new Task('server', (...args: any[]) => {
    let launchConfig = require('../server/launch-config');
    Miter.launch(launchConfig);
});
