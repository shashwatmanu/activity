
const verifyAuth = (req, res, next)=>{
    if(req.headers.authorization !== process.env.apiKey)
        return res.sendStatus(401);
    next();
}
module.exports = verifyAuth;