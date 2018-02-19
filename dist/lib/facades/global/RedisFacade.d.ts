import '../../../lib/redis/RedisClient';
import { IFacade, IFacadeBase } from '../interfaces/IFacadeGrammar';
import { IRedis } from '../../../lib/redis/IRedis';
export declare const Redis: IRedis & IFacadeBase;
export declare const RedisFacade: IRedis & IFacade;
