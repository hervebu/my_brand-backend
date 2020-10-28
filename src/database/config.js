
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

  const dbConnection =
    mongoose.connect(
        process.env.db_URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true,
            useFindAndModify: false
        }).then (
            console.log('connected to mongodb')
        ).catch( error => console.log(error))

 const token = process.env.tokenSecret
export default {dbConnection, token}
