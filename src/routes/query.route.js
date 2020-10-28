
import express from 'express'
import queryController from '../controllers/query.controller'
import {tokenVerify} from '../middlewares/token.verify'

let queryRouter = express.Router()
const {createQuery, retrieveQueries, removeQuery} = queryController

queryRouter.post('/query', createQuery)
queryRouter.get('/query', tokenVerify, retrieveQueries)
queryRouter.delete('/query/:query_id',tokenVerify, removeQuery)

export default queryRouter
