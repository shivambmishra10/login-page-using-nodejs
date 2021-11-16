const path=require('path')
const express=require('express')
var bodyParser = require('body-parser')

const app=express()
const router=require('./router')
const {v4:uuidv4}=require('uuid')
const port=process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
const session=require("express-session")
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
app.use('/route',router)
// home route
app.get('/',(req,res)=>
{
    res.render('home',{title:"Login system"})
})

app.listen(port,()=>
{
  console.log(`server at port ${port}`)
})