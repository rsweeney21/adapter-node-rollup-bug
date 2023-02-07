import { Redis } from 'ioredis';

export function createRedis() {
    const url = `redis://localhost:6379`

    return new Redis(url);
}
