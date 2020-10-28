import express from 'express'

import articleRouter from './article.route'
import userRouter from './user.route'

const router = express.Router()

router.use(articleRouter)
router.use(userRouter)


export default router