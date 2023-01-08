const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserDataCollection = require('./mongoData');
const path = require("path");

const mypass = "Saurabh123";

require('dotenv').config();

mongoose.connect(`mongodb+srv://Saurabh:${mypass}@cssdb.my2snqz.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("connection established");
}).catch((err) => { console.log("Connection Failed"); });


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {

    const check=await UserDataCollection.exists({user_name:req.body.uname});

    try {
        if(!check){
            const user = new UserDataCollection({
                user_name: req.body.uname,
                user_email: req.body.umail,
                user_password: req.body.upass,
                user_code: []
            });
    
            const result = await user.save();
        }
        res.json({ status: 'ok' });
    }
    catch (err) {
        res.json({ status: 'error', error: "Error Occured" });
    }
    
})

app.patch('/api/deleteContent',async (req,res)=>{
    const obj={code_title:req.body.codeTitle,code_content:req.body.codeContent};
    await UserDataCollection.updateOne({user_name:req.body.username},{$pull:{user_code:{code_title:req.body.codeTitle}}});
    res.json({status:'OK'});
});

app.post('/api/createData',async (req,res)=>{
    const obj={code_title:req.body.codeTitle,code_content:req.body.codeContent};
    await UserDataCollection.updateOne({user_name:req.body.username},{$push:{user_code:obj}});
    res.json({status:'ok'});
});

app.get('/api/getdata',async (req,res)=>{
    const dataFromUser=await UserDataCollection.find({user_name:req.query.username});
    // console.log(dataFromUser);
    return res.json({dataFromUser});
});

// if(process.env.NODE_ENV=="production"){
//     app.use(express.static('FrontEnd/build'));
// }

app.use(express.static(path.join(__dirname, "./FrontEnd/build")));

app.get("*", function (req, res) {
  res.sendFile("./FrontEnd/build/index.html");
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});