/// <reference path="contracts/Cache.ts" />

import './cache/RedisCache'
import './log/WinstonLogger'

// najs-binding package
export { make } from 'najs-binding'
export { bind, InstanceCreator } from 'najs-binding'
export { register } from 'najs-binding'
export { singleton } from 'najs-binding'
export { autoload } from 'najs-binding'
export { extend, InstanceExtending } from 'najs-binding'
export { ClassRegistry } from 'najs-binding'
export { IAutoload } from 'najs-binding'

// core package
import { Najs } from './core/Najs'
export { Najs }
export default Najs
export { ServiceProvider } from './core/ServiceProvider'

// constants
export { SystemClass, ContextualFacadeClass } from './constants'

// http package
export { HttpKernel, MiddlewareDefinition, MiddlewareGroupDefinition } from './http/HttpKernel'

export { RouteCollection } from './http/routing/RouteCollection'
export { ExpressHttpDriver } from './http/driver/ExpressHttpDriver'

export { Controller } from './http/controller/Controller'
export { ExpressController } from './http/controller/ExpressController'

export { RouteFactory } from './http/routing/RouteFactory'

export { ResponseFactory } from './http/response/ResponseFactory'

export { RequestInput } from './http/request/RequestInput'
export { RequestDataReader } from './http/request/RequestDataReader'
export { RequestDataWriter } from './http/request/RequestDataWriter'

export { ISession } from './http/session/ISession'
export { Session as NajsSession } from './http/session/Session'
export { ExpressSessionMemoryStore } from './http/session/ExpressSessionMemoryStore'

export { IExpressMiddleware } from './http/middleware/IExpressMiddleware'
export { ExpressMiddlewareBase } from './http/middleware/ExpressMiddlewareBase'

// built-in core middleware
export { PoweredByMiddleware } from './http/middleware/built-ins/PoweredByMiddleware'
export { RequestIdMiddleware } from './http/middleware/built-ins/RequestIdMiddleware'

// built-in middleware
export { StaticMiddleware } from './http/middleware/built-ins/StaticMiddleware'
export { CorsMiddleware } from './http/middleware/built-ins/CorsMiddleware'
export { CsurfMiddleware } from './http/middleware/built-ins/CsurfMiddleware'
export { SessionMiddleware } from './http/middleware/built-ins/SessionMiddleware'
export { CookieMiddleware } from './http/middleware/built-ins/CookieMiddleware'
export { BodyParserMiddleware } from './http/middleware/built-ins/BodyParserMiddleware'

export { AuthMiddleware } from './http/middleware/AuthMiddleware'

// najs-facade package
export {
  IFacade,
  IFacadeBase,
  IContextualFacade,
  IContextualFacadeFactory,
  IContextualFacadeFactoryFullVerbs,
  IContextualFacadeVerbAt,
  IContextualFacadeVerbFor,
  IContextualFacadeVerbFrom,
  IContextualFacadeVerbOf,
  IContextualFacadeVerbWith
} from 'najs-facade'
export { IFacadeContainer } from 'najs-facade'
export { Facade } from 'najs-facade'
export { ContextualFacade } from 'najs-facade'
export { FacadeContainer } from 'najs-facade'

// facade package
export { AppFacade, App } from './facades/global/AppFacade'
export { CacheFacade, Cache } from './facades/global/CacheFacade'
export { ConfigFacade, Config } from './facades/global/ConfigFacade'
export { EventFacade, Event } from './facades/global/EventFacade'
export { DispatcherFacade, Dispatcher } from './facades/global/DispatcherFacade'
export { LogFacade, Log } from './facades/global/LogFacade'
export { PathFacade, Path } from './facades/global/PathFacade'
export { RedisFacade, Redis } from './facades/global/RedisFacade'
export { ResponseFacade, Response } from './facades/global/ResponseFacade'
export { RouteFacade, Route } from './facades/global/RouteFacade'

export { InputContextualFacade, Input } from './facades/contextual/InputContextualFacade'
export { SessionContextualFacade, Session } from './facades/contextual/SessionContextualFacade'
export { AuthContextualFacade, Auth } from './facades/contextual/AuthContextualFacade'
export { CookieContextualFacade, Cookie } from './facades/contextual/CookieContextualFacade'

// event package
export { EventDispatcher } from './event/EventDispatcher'
export { EventSubscriber } from './event/EventSubscriber'

// cache package
export { RedisCache } from './cache/RedisCache'

// test package
export { jest } from './test/jest'
export { TestSuite } from './test/TestSuite'

// log package
export { WinstonLogger } from './log/WinstonLogger'

// redis package
export { RedisClient } from './redis/RedisClient'

// helpers package
export { route } from './helpers/route'

// view package
export { HandlebarsHelper } from './view/handlebars/HandlebarsHelper'
export { HandlebarsViewResponse } from './view/handlebars/HandlebarsViewResponse'
export { SessionHandlebarsHelper } from './view/handlebars/helpers/SessionHandlebarsHelper'
export { RequestDataReaderHandlebarsHelper } from './view/handlebars/helpers/RequestDataReaderHandlebarsHelper'
export { CookieHandlebarsHelper } from './view/handlebars/helpers/CookieHandlebarsHelper'

// internal service providers
export { ExpressHttpDriverServiceProvider } from './service-providers/ExpressHttpDriverServiceProvider'
export { HandlebarsViewServiceProvider } from './service-providers/HandlebarsViewServiceProvider'
export { MongooseServiceProvider } from './service-providers/MongooseServiceProvider'

// auth package
export { AuthManager } from './auth/AuthManager'
export { Guard } from './auth/guards/Guard'
export { SessionGuard } from './auth/guards/SessionGuard'
export { GenericUser } from './auth/GenericUser'
export { EloquentUserProvider } from './auth/EloquentUserProvider'
export { LoginController } from './auth/controller/LoginController'
