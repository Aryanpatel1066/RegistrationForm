const user_model = require("../models/user.model")
exports.verifySignuBody = async(req,res,next)=>{
    try{
       //check for the name ,email,userId,same userId present

       if(!req.body.name){
        return res.status(400).send({
            message:"name was not provided in request body"
        })
      }
      //check for the email
      if(!req.body.email){
        return res.status(400).send({
            message:"email was not provided in request body"
        })
      }
      //user id check
      if(!req.body.userId){
        return res.status(400).send({
            message:"userId was not provided in request body"
        })
      }
       //user password check
       if(!req.body.password){
        return res.status(400).send({
            message:"password was not provided in request body"
        })
      }
      //check if same userId
      const user = await user_model.findOne({userId:req.body.userId});
      if(user){
        return res.status(400).send({
            message:"faied userid allredy present"
        })
      }
      //check if same email
      const emailExists = await user_model.findOne({ email: req.body.email });
      if (emailExists) {
          return res.status(400).send({
              message: "Failed: Email already exists"
          });
      }
      
      next()
    }
    catch(err){
        res.status(502).send({
            message:"some error happned while checking body"
        })
    }
}