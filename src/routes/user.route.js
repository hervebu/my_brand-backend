
import express from 'express'
import userController from '../controllers/user.controller'
import {tokenVerify} from '../middlewares/token.verify'

let userRouter = express.Router()
const {addUser, loginUser, retrieveCurrentUser, updateUserInfo} = userController
userRouter.post('/user/new', addUser)
userRouter.post('/user/accounts', loginUser)
userRouter.get('/user/accounts/:user_id',tokenVerify, retrieveCurrentUser)
userRouter.put('/user/accounts/:user_id', tokenVerify,updateUserInfo)

export default userRouter 
