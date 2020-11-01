
import userService from '../services/user.service'
import {loginValidSchema, signupValidSchema} from '../validations/authent.validation'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const {addNewUser,
        checkForUser,
        updateUser,
        getUserInfo
    } = userService
const addUser = async (req, res) => {
    const {error} = signupValidSchema.validate(req.body)
    if(error) {
          res.status(422).send({message:error})
    }
        const salt = await bcrypt.genSalt(10).then ().catch(error => {
            if (error) throw (error)
        })
        const hashedPassword = await bcrypt.hash(req.body.password,salt)    
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
        await addNewUser(user).then ((snap) => {
        if (snap == 1) {
            return res.status(400).send({message: 'Email has been taken'})
        }else {
            
        const signupToken = jwt.sign({_id: snap},process.env.tokenSecret)
        return res.header('auth_token',signupToken).status(201).send({
            message: 'You have been successfully signed up',
            token: signupToken,
            val: snap
        })
        }
        })
            
}
const loginUser = async (req, res) => {
    const {error} = loginValidSchema.validate(req.body)
    if (error) {res.status(422).send({message: error.details[0].message})}
    
    await checkForUser(req.body.email, req.body.password).then( async (returnValue) => {
        if (returnValue == 1) {
            return await res.status(422).send({message: 'Invalid email address'})
        } else if (returnValue == 2) {
            return await res.status(422).send({message: 'Wrong password'})
        } else  {
                
            const loginToken = jwt.sign({_id: returnValue},process.env.tokenSecret)
            return res.header('auth_token',loginToken).status(303).send({
                message: 'Successfully logged in',
                token: loginToken,
                val: returnValue
            })
        }
    }).catch(err => {
        if (err) throw (err)
    })
    
}

const updateUserInfo = async (req, res) => {
    const {error} = signupValidSchema.validate(req.body)
    if(error) {
          res.status(422).send({message:error})
    }
    const salt1 = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(req.body.password,salt1)
    const updates = {
        name: req.body.name,
        email: req.body.email,
        password: hashedNewPassword
    }
    await updateUser(req.params.user_id,updates).then ((snap) => {
        if (snap == 1) {
            return res.status(400).send({message: 'Email has been taken'})
        }else {        
        return res.status(200).send({
            message: 'Your user information has been updated',
            
        })
        }
    })
}

const retrieveCurrentUser = async (req, res) => {
    const userData = await getUserInfo(req.params.user_id)
    return res.status(200).send({"user data": userData})
}
 
export default {addUser, loginUser, updateUserInfo, retrieveCurrentUser}
