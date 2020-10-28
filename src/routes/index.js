import express from 'express'
import articleRouter from './article.route'


const router = express.Router()

router.use(articleRouter)

export default router