
import jwt from 'jsonwebtoken'

export  const tokenVerify = (req, res, next) => {
    
    const token = req.header('auth_token')
    if (!token) return res.status(401).send('Access denied')
    try{
         const decodedToken = jwt.verify(token, process.env.tokenSecret)
         const userId = decodedToken._id   
         next()
         return userId
    }catch (err) {
        console.log(err)
        res.status(400).send('Invalid access key')
    }
}
