const express = require('express')
const app=express()
const db = require('./models')
const userRoutes = require('./routers/user-routes')
const productRoutes = require('./routers/product-routes')
const profilRoutes = require('./routers/profil-routes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',userRoutes)
app.use('/',productRoutes)
app.use('/',profilRoutes)


db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log("server listen in port 3000"))
})
