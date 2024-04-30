import {ObjectId} from "mongodb";

export function getRedisId (entity: string, entityId: ObjectId | string) {
    return `${entity}:${typeof entityId === 'string' ? entityId : entityId.toHexString()}`
}

export function splitRedisId (redisId: string) {
    const split = redisId.split(':')

    return {
        entity: split[0],
        entityId: split[1]
    }
}