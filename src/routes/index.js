import express from 'express'
import queryRouter from './query.route'



const router = express.Router()


router.use(queryRouter)

export default router