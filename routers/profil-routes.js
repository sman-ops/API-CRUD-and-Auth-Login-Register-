const express=require('express')
const route =express.Router()
const db =require('../models')


route.post('/createprofile',(req,res)=>{
    db.Profil.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        country:req.body.country,
        UserId: req.body.UserId,

    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


route.get('/profil/:id',(req,res)=>{
   db.Profil.findOne({where:{id:req.params.id},include:[db.User]})
   .then((response)=>res.status(200).send(response))
   .catch((err)=>res.status(400).send(err))

   //db.User.findAll({where:{id:req.params.id}})
})

route.get('/profils',(req,res)=>{
    db.Profil.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })

 route.patch('/profil/:id',(req,res)=>{
    db.Profil.update({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        country:req.body.country,
        UserId:req.body.UserId

    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })


 route.delete('/profil/:id',(req,res)=>{
   db.Profil.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
 
    //db.User.findAll({where:{id:req.params.id}})
 })
 

module.exports=route