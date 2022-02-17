const express=require('express')
const route =express.Router()
const db =require('../models')


const userController=require('../controlles/userController')


route.post('/register',(req,res)=>{
    userController.register(req.body.username,req.body.email,req.body.password)
    .then(response=>res.status(200).json(response))
    .catch(err=>res.status(400).json(err))
  
   
})

const PrivateKey="this is private key kfhkfgkhgfkhfkghkfgkf:,;:;,:;,:;:,:;,"

route.post('/login',(req,res)=>{
    userController.login(req.body.email,req.body.password)
    .then(response=>res.status(200).json({token:response}))
    .catch(err=>res.status(400).json({err:err}))
  

   
  
})




route.get('/user/:id',(req,res)=>{
   db.User.findOne({where:{id:req.params.id}})
   .then((response)=>res.status(200).send(response))
   .catch((err)=>res.status(400).send(err))

   //db.User.findAll({where:{id:req.params.id}})
})

route.get('/users',(req,res)=>{
    db.User.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })

 route.patch('/user/:id',(req,res)=>{
    db.User.update({
        username : req.body.username,
        email : req.body.email,
        password:req.body.password,

    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })


 route.delete('/user/:id',(req,res)=>{
   db.User.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })
 

module.exports=route