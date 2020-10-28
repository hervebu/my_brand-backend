
import User from '../database/models/user.model'
import bcrypt from 'bcrypt'

const addNewUser = async (user) => {
   if (await User.findOne({email:user.email})) {
       return 1
   } else {
       const val = await User.create(user)
        
           return val._id         
}
}

    
const checkForUser = async (email, password) => {
    const account = await User.findOne({email:email})
    if (!account) {
            return 1
    } else {
        const passwordCheck = await bcrypt.compare(password, account.password)
        if (!passwordCheck) {
            return  2
        }else {
            return await account._id
        }
    }
     
}

const checkForToken = async (id) => {
    const account = await User.findOne({_id:id})
    if (!account) {
        return false
    } else {
        return true
    }

}

const updateUser = async (id, formdata) => {
    if (await User.findById({_id:id})) {
        return await User.findByIdAndUpdate({_id:id}, formdata, (err) => {
            console.log('Unable to update your information', err)

        })
        
    } else if(await User.findOne({email:formdata.email})) {
        return 1      
    }
    
}

const getUserInfo = async (id) => {
     const currentUserInfo = await User.findById({_id:id})
     return currentUserInfo
}

export default {addNewUser, checkForUser, checkForToken, updateUser, getUserInfo}
