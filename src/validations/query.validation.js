import Joi from 'joi' 
 
 const querySchema = Joi.object({
            senderName: Joi.string().min(4).required(),
            email: Joi.string().lowercase().required().email(),
            message: Joi.string().required()
        })

 

 export {querySchema}       
