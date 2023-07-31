const express = require("express");

require("./dbcomponents/connection");
const Sign_ =require("./dbcomponents/SignPageSchema");


const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))


const port = process.env.PORT || 8000;

//we  will handle post request-----------------------------------------------------

app.use(express.json());

  


//Create route for user registration-----------------------------------------
app.post("/register",(req,res)=>{
    //check to make sure email provided not registerd---
    Sign_.findOne({email:req.body.email}).then((user)=>{
        if(user){
            return res.status(400).json({email:"A user has already registerd with this email"});
        }else{
            const newUser = new Sign_({
                Name : req.body.Name,
                email : req.body.email,
                password : req.body.password
            });
            console.log(req.body);
            newUser.save();
            return res.status(200).json({msg: newUser})

        }
    });
})
//-------------------------------------------------------------------------------
// request for fetch register data---------------------------------------------
app.post("/SignPageSchema",async(req,res)=>{
    try{
       console.log(req.body);
        const getRegisterRecord = await Sign_.find({email:req.body.email,password:req.body.password});
        if(Object.keys(getRegisterRecord).length<1)
          return res.status(404).json({msg:"User Not found"});
        res.send(getRegisterRecord);
    }catch(e){
        res.status(400).send(e);
    }
    
})
//------------------------------------------------------------------------------







app.get("/",async (req,res)=>{
    res.send("Hello NativeByte"); 
})

app.listen(port, ()=>{
    console.log('Connection is live at port no. 8000');
})