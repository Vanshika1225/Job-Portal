const express=require("express");
const app=express();
const port=process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("This is signup page")
});

app.listen(port,()=>{
    console.log(`Running at port number ${port}`)
})