import { IUser } from "./user"

export interface ITask {
    title: string
    category: string
    tags: string[]
    users: IUser[]
}