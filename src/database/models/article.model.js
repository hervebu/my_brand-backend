
import mongoose from 'mongoose'
  
let articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    coverImgUrl: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: `${new Date().getDate()}/` 
        +`${new Date().getMonth() + 1}/${new Date().getFullYear()} `
        +`${new Date().getHours()}:${new Date().getMinutes()}`
    }
});    

export default mongoose.model('Article', articleSchema);
