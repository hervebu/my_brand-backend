import mongoose from 'mongoose'

let querySchema = new mongoose.Schema({
    senderName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})    

export default mongoose.model('Query', querySchema)