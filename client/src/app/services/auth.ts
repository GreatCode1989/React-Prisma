import {User} from "@prisma/client"
import {api} from './api'

export type UserData = Omit<User, 'id'>