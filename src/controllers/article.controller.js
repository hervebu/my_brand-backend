
import {addArticle, 
        getArticles,
        removeArticle,
        getOneArticle,
        updateArticle
    } from '../services/article.service'
import {addArticleValidation} from '../validations/article.validation'

export const createArticle = async (req, res) => {
       
    const {error} = addArticleValidation.validate(req.body)
        if(error) {
          res.status(422).send({message:error.details[0].message})
        }
        const id = await addArticle(req.body)
        res.status(201).send({
        message:`Article '${req.body.title}'has been created.`,
        _id: id
        })   
      
}

export const retrieveArticles = async (req, res) => {
    const articles = await getArticles()
    res.status(200).json({data:articles})
}
export const retrieveOneArticle = async (req, res) => {
    const article = await getOneArticle(req.params.article_id)
    res.status(200).send({"requested article":article})
}

export const deleteArticle = async (req, res) => {
    
    await removeArticle(req.params.article_id).then(
        res.status(200).send({message: 'Article successfully deleted'})
    ).catch ((error) => console.log(error))  
}

export const editArticle = async (req, res) => {
    const {error} = addArticleValidation.validate(req.body)
    if(error) {
      res.status(422).send({message:error.details[0].message})
    }
    await updateArticle(req.params.article_id, req.body)
        res.status(200).send({
        message:`Article '${req.body.title}'has been updated.`
        })
}
