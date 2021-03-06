
import express from 'express';
import * as config from './src/database/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './src/routes/main.route'

config.dbConnection
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

  
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}..`);
})

export default app
