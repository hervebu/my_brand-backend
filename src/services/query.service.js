import Query from '../database/models/query.model'

const addQuery = async (query) => {
    if (!query) {
        return res.status(400).send('Request body missing')
    }
    return await Query.create(query)
}
const getQuery = async () => {
    return await Query.find()
}
// const deleteQuery = async () => {
//     return await Query.findOneAndDelete
// }

export default {addQuery, getQuery}