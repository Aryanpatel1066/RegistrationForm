const express = require("express")
const mongoose = require('mongoose')
const server_config =require("./configs/server.config");
const db_config = require("./configs/db.config");
const user_modal = require("./models/user.model");
const bcrypt = require('bcryptjs')
 const app = express()
 app.use(express.json())
//step2: logic to connect the data base
mongoose.connect(db_config.DB_URL);
const db = mongoose.connection

db.on("error",()=>{
    console.log("error while connecting to the database")
});
db.once("open",()=>{
    console.log("sussessfully! connected to the db..")
    init()
})
//step3: create the only once  time when serve start 
async function init(){
    try{
    const isAdmin =await user_modal.findOne({userId:"admin"});
    if(isAdmin){
        console.log("admin is allredy present");
        return;
    }
         //create admin
        const newAdminUser = await user_modal.create({
            name:"aryan patel",
            userId:"admin",
            email:"aryanpatel1248@gmail.com",
            userType:"ADMIN",
            password: bcrypt.hashSync("aryan123",8),
        });
        console.log("admin user created.",newAdminUser)
    
    }
    catch(err){
        console.log(err);
    }
}
require("./routes/auth.routes")(app)
//step1: start the server using listen method
app.listen(server_config.PORT,()=>{
    console.log("server started at port number :",server_config.PORT)
})