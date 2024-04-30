import {ObjectId} from 'mongodb'
import _ from 'lodash'

export function recursiveStringIdsToObjectIds<T extends AnyObject> (dataToClean: T): T {
  return runRecursiveStringIdsToObjectIds(_.cloneDeep(dataToClean))
}

function runRecursiveStringIdsToObjectIds<T extends AnyObject> (dataToClean: T): T {
  const data: T = dataToClean
  for (const field in data) { toObjectId(field, data) }
  return data
}

function isAHexObjectIdString (fieldName: string, value: any): boolean {
  if (typeof value !== 'string') return false

  if (fieldName === '_id') return true
  if (fieldName === 'id') return true
  if (fieldName.includes('Id') && value.length === 24) return true

  return false
}

function toObjectId<T extends AnyObject> (field: keyof T, data: T) {
  if (isAHexObjectIdString(field as string, data[field])) {
    (data[field] as ObjectId) = new ObjectId(data[field])
    return
  }

  if (Array.isArray(data[field] && (field as string).includes('Ids') && typeof data[field][0] === 'string' && data[field][0].length === 24)) {
    (data[field] as ObjectId[]) = data[field].map((id: string) => new ObjectId(id))
    return
  }

  if (typeof data[field] !== 'object' || (data[field] as any) instanceof Buffer) return

  if (Array.isArray(data[field])) {
    data[field] = toObjectIdArray(data[field]) as T[keyof T]
    return
  }
  data[field] = recursiveStringIdsToObjectIds(data[field])
}

function toObjectIdArray<T extends AnyObject> (dataArray: T[]): T[] {
  const resultArray: T[] = []

  for (const record of dataArray) {
    resultArray.push(recursiveStringIdsToObjectIds(record))
  }
  return resultArray
}
