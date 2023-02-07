import type { Redis }from 'ioredis';
import { createRedis } from './redis.js';

export class Database {
    private redis: Redis;
    
    constructor() {
        this.redis = createRedis();
    }

    getUser(id: string) {
        return { id, name: 'John Doe' };
    }
}
