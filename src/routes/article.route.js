
import express from 'express'
import {
    createArticle,
    retrieveArticles,
    deleteArticle,
    retrieveOneArticle,
    editArticle
} from '../controllers/article.controller'
import {tokenVerify} from '../middlewares/token.verify'


let articleRouter = express.Router()

articleRouter.post('/articles/new',tokenVerify,createArticle) 
articleRouter.get('/articles',tokenVerify,retrieveArticles)
articleRouter.get('/articles/:article_id',retrieveOneArticle)
articleRouter.delete('/articles/:article_id',tokenVerify,deleteArticle)
articleRouter.put('/articles/:article_id',tokenVerify,editArticle)

export default articleRouter