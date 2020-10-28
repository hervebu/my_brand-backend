
import mongoose from 'mongoose'
  
let userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min:6
    },
    role: {
        type: String,
        default: 'user'
    }
});    

export default mongoose.model('User', userSchema);
