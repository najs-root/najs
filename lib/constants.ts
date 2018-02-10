export const HttpDriverClass: string = 'HttpDriver'
export const LoggerClass: string = 'Logger'
export const HttpKernelClass: string = 'HttpKernel'
export const CacheClass: string = 'Cache'
export const SchemaValidatorClass: string = 'SchemaValidator'

export const GlobalFacade = {
  Application: 'Najs.Application',
  Cache: 'Najs.Cache',
  Config: 'Najs.Config',
  Path: 'Najs.Path'
}

/**
 * This Object Configuration's key
 */
export const ConfigurationKeys = {
  CWD: 'cwd',
  ViewEngineName: 'view.engine',
  HandlerBarsOptions: 'view.handlebars',
  Paths: {
    app: 'path.app',
    config: 'path.config',
    layout: 'path.layout',
    public: 'path.public',
    resource: 'path.resources',
    route: 'path.route',
    storage: 'path.storage',
    view: 'path.view'
  },
  Middleware: {
    csurfOptions: 'middleware.csurf',
    corsOptions: 'middleware.cors'
  },
  Cache: {
    engine: 'cache.engine',
    redis: 'cache.redis'
  },
  NajsOptions: {
    port: 'port',
    host: 'host'
  }
}
