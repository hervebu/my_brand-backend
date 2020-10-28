import Article from '../database/models/article.model'

export const addArticle = async (post) => {

   const art = await Article.create(post)
    return art._id
}
export const getArticles = async () => {
    return await Article.find()
}
export const getOneArticle = async (id) => {
    return await Article.findById({_id:id})
}

export const removeArticle = async (id) => {
    return await Article.findOneAndDelete({_id:id})
}
export const updateArticle = async (id, post) => { 
    const updates = {
        date:`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
                + ` ${new Date().getHours()}:${new Date().getMinutes()}`,
        title: post.title,
        body: post.body,
        coverImgUrl: post.coverImgUrl
    } 
    return await Article.findByIdAndUpdate({_id:id}, updates, (err) => {
        if (err) throw err

    })
} 

