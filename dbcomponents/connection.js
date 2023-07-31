const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Jira_pro").then(()=>{
    console.log("Database connection successfully")
}).catch((e)=>{
    console.log("No connection")
})