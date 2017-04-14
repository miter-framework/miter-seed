import { TaskRunner } from 'ts-task';

let taskName = process.argv[2];
let taskArgs = (taskName && [...process.argv.slice(3)]) || [];

let runner = new TaskRunner();
runner.loadTasks(`${__dirname}/tasks`);
runner.runTask(taskName || 'server', ...taskArgs);
