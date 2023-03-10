import express, { Express } from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

//!!! HAD TO ADD THIS !!!
app.use(express.json())

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const URI: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.eihacxg.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose.connect(URI)
        .then(() => 
            app.listen(PORT, () => 
                console.log(`Server running on http://localhost:${PORT}`)
            )
        )
        .catch((error) => {
            throw error
        })
