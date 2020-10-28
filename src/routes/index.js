
import express from 'express'
import queryRouter from './query.route'
import articleRouter from './article.route'
import userRouter from './user.route'

const router = express.Router()

router.use(articleRouter)
router.use(userRouter)
router.use(queryRouter)


export default router
