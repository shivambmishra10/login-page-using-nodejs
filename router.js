var express=require('express')
var router=express.Router()

const credential=
{
    email:'admin@gmail.com',
    password:'admin123'
}
//login user
router.post('/login',(req,res)=>
{
    if(req.body.email == credential.email && req.body.password == credential.password)
    {
        req.session.user=req.body.email
        // res.end('Login successful!')
        // res.send('logout successful')
        res.redirect('/route/dashboard')
        console.log(req.session.user)
    }
    else
    res.end('invalid username')
})
router.get('/dashboard',(req,res)=>
{
    console.log(req.session)
    if(req.session.id)
    res.render('dashboard',{title:req.session.id})
})
router.get('/logout',(req,res)=>
{
    req.session.destroy(function(err)
    {
        if(err)
        {
            console.log(err)
            res.send("error")
        }
        else
        res.render('home',{title:"Express"})
    })
})
module.exports=router