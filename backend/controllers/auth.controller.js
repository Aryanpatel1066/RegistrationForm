const bcrypt = require("bcryptjs")
const user_model = require("../models/user.model")
exports.signup = async(req,res)=>{
    //step1 :red the body
    const request_body = req.body;

    //step2: read the data in body 
    const userObj={
        name:request_body.name,
        email:request_body.email,
        password:bcrypt.hashSync(request_body.password,8),
        userId:request_body.userId,
        // userType:request_body.userType,
    }
    try{
    const user_created = await user_model.create(userObj);
    const res_obj = {
        name : user_created.name,
        userId : user_created.userId,
        email : user_created.email,
        userType : user_created.userType,
        createdAt : user_created.createdAt,
        updatedAt : user_created.updatedAt
    }
    res.status(201).send({
        message:"successfully user created",
        data:res_obj
    })

    }
    catch(err){
        console.log("error while signup")
        res.status(500).send({
            message:"error while signup"
        })
    }
}