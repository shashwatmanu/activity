const express = require('express');
require("dotenv").config();


const app = express();
const PORT = 8082;



const userRouter = require("./routers/users.routers")
app.use("/users", userRouter)


app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`)
})