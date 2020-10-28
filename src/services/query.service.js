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

const deleteQuery = async (id) => {
    return await Query.findOneAndDelete({_id:id})
}

export default {addQuery, getQuery, deleteQuery}