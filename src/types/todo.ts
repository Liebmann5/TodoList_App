import { Document } from "mongoose"

export interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}

//typescript Document Date type
//https://stackoverflow.com/questions/40526102/how-do-you-format-a-date-time-in-typescript
//https://stackoverflow.com/questions/45485073/how-do-i-express-a-date-type-in-typescript
