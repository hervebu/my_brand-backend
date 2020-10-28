
import Joi from 'joi'

const signupValidSchema = Joi.object({
           name: Joi.string().min(4).required(),
           email: Joi.string().lowercase().required().email(),
           password: Joi.string().min(6).required()
       })
const loginValidSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.required()
})


export {signupValidSchema, loginValidSchema}       
