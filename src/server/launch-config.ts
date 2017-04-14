import { Miter, ServerMetadataT, DatabaseMetadataT, Charset } from 'miter';
import { config } from './util/config';
import { AppModels } from './models';
import { AppServices } from './services';
import { AppControllers } from './controllers';

export const DEFAULT_SERVER_PORT = 8081;

let ormConfig = config.try<DatabaseMetadataT>('connections.db');

export const launchConfig: ServerMetadataT = {
    name: config.try<string>('server.name', 'miter-seed'),
    
    orm: {
        enabled: !!ormConfig,
        models: AppModels,
        
        db: ormConfig
    },
    
    services: AppServices,
    
    port: Miter.normalizePort(config.try<any>('server.port', DEFAULT_SERVER_PORT)),
    router: {
        path: 'api',
        controllers: AppControllers,
        middleware: [],
        policies: []
    },
    
    logLevel: config.try<any>('logger.logLevel')
};
