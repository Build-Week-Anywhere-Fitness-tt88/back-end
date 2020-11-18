const jwt = require('jsonwebtoken');

function restrict(){
    return async (req, res, next) => {
        try{
            const token = req.cookies.token;

            if(!token){
                return res.status(401).json({
                    errorMessage: "Invalid credentials"
                })
            }

            jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
                if(err){
                    return res.status(401).json({
                        errorMessage: "Invalid credentials"
                    })
                }

                req.token = decoded;

                next()
            })
        } catch(error){
            next(error)
        }
    }
}

module.exports = {
    restrict
}

//  CAN DELETE THIS FILE