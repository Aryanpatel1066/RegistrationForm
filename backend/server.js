const express = require("express")
const server_config =require("./configs/server.config");
const app = express()

//step1: start the server using listen method

app.listen(server_config.PORT,()=>{
    console.log("server started at port number :",server_config.PORT)
})