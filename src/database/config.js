import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const dbConnection = () => {
    mongoose.connect(
        process.env.db_URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true
        }).then (
            console.log('connected to mongodb')
        ).catch( error => console.log(error))
}