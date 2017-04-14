import { Miter, ServerMetadataT } from 'miter';
import { config } from './util/config';

export const DEFAULT_SERVER_PORT = 8081;

export const commonConfig: ServerMetadataT = {
    name: config.try<string>('server.name', 'brandonslade.me'),
    
    port: Miter.normalizePort(config.try<any>('server.port', DEFAULT_SERVER_PORT)),
    router: {
        path: 'api'
    },
    
    orm: {
        enabled: false
    },
    
    logLevel: config.try<any>('logger.logLevel')
};
