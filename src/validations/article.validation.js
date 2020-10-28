
import Joi from 'joi'

const addArticleValidation = Joi.object({
           title: Joi.string().min(30).required(),
           body: Joi.string().min(100).required(),
           coverImgUrl: Joi.string().required()
       })

export {addArticleValidation}       
