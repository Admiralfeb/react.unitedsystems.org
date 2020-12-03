import { ObjectId } from 'bson';

export interface IBuildInfoInsert {
    powerplay: boolean
    _id: ObjectId
    engLevel: number
    ship: number
    moreInfo: string
    description: string
    buildLink: string
    id: number
    guardian: boolean
    beginner: boolean
    specializations: string[]
    author: string
}
