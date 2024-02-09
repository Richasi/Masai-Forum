const jwt = require('jsonwebtoken');

const auth =(req, res, next) => {
 
   const token = req.headers.authorization?.split(" ")[1];
   if(token){
    jwt.verify(token,`${process.env.JWT_SECRET}`,(err,decoded)=>{
        if(decoded){
           // console.log(decoded);
            req.body.userID=decoded.userID
            req.body.username=decoded.username
            next();
        }else{
            res.send({ msg:"You are not Authorised"})
        }
    });
   }else{
             res.send({ msg:"Please Login!"})
    }
};


module.exports = {auth};