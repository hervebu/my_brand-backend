//import { json } from 'body-parser'
import express from 'express'
import queryController from '../controllers/query.controller'


let queryRouter = express.Router()
const {createQuery, retrieveQueries} = queryController

queryRouter.post('/query', createQuery)

queryRouter.get('/query', retrieveQueries)

export default queryRouter