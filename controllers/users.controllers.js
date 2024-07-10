const data = require('../data.json')
const {getQueryErrors} = require("../validators/user.validator")




//
const searchUsers = (req, res)=>{
    const {gender, age} = req.query;

    //Validation

      const {error} =  getQueryErrors({gender,
      age: age && Number(age)})
    if(error) return res.status(400).send({message: error.details[0].message})

      

    if(gender && age){
        const filteredData = data.data.filter((curr)=> curr.gender===gender &&curr.dob.age === Number(age))
        return res.send(filteredData);
    }
    else if(gender){
        const filteredData = data.data.filter((curr)=> curr.gender===gender)
        return res.send(filteredData);
    }
    else if(age){
        const filteredData = data.data.filter((curr)=> curr.dob.age=== Number(age))
        return res.send(filteredData);
    }
  }


//
  const getUsers = (req, res)=>{
    if(req.headers.authorization !== process.env.apiKey) return res.sendStatus(401);
    res.send(data.data);
  }


//
  const getUserById = (req, res)=>{
    const reqUser = data.data.find((curr)=>curr.login.uuid===req.params.uuid);
    if(reqUser) return res.send(reqUser)
      res.status(404).send({message: 'ID not found'});
  }

  module.exports = {searchUsers, getUsers, getUserById};
