module.exports = (req, res, next) =>{
    if (!req.session.user) {
        res.json({msg:'no hay usuario en session'})
    } else {
        next()
    }
}