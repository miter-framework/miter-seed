import { Task } from 'ts-task';
import { Miter, ServerMetadataT } from 'miter';

export const ServerTask: Task = new Task('server', (...args: any[]) => {
    let launchConfig = <ServerMetadataT>require('../server/launch-config').launchConfig;
    Miter.launch(launchConfig);
});
