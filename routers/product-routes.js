const express=require('express')
const route =express.Router()
const db =require('../models')


route.post('/createproduct',(req,res)=>{
    db.Product.create({
        name : req.body.name,
        price : req.body.price,
        UserId:req.body.UserId,

    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


route.get('/product/:id',(req,res)=>{
   db.Product.findOne({where:{id:req.params.id},include:[db.User]})
   .then((response)=>res.status(200).send(response))
   .catch((err)=>res.status(400).send(err))

   //db.User.findAll({where:{id:req.params.id}})
})

route.get('/products',(req,res)=>{
    db.Product.findAll({include:[db.User]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })

 route.patch('/product/:id',(req,res)=>{
    db.Product.update({
        name : req.body.name,
        price : req.body.price,
        UserId:req.body.UserId,

    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })


 route.delete('/product/:id',(req,res)=>{
   db.Product.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })
 

module.exports=route