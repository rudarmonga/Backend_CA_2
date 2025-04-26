const express = require('express');
const app = express();
const PORT = 5000;
app.use(express());

const users = [
    { username : "alice" , age : 25 , email : "alice@example.com"},
    { username : "bob" , age : 30 , email : "bob@example.com"},
    { username : "charlie" , age : 28 , email : "charlie@example.com"},
]
app.get('/',(req,res)=>{
    res.send('go to endpoint => /users/:username');
})
app.get('/users',(req,res)=>{
    res.status(500).json({message : "Username Perameter Connot be Empty"});
    console.log("Username Perameter Connot be Empty");
})
app.get('/users/:username1',(req,res)=>{
    try {
        const username1 = req.params.username1;
    const userditales = users.filter((user) => (user.username === username1));
    if(!userditales){
        res.status(400).json({message : "User not found"});
        console.log("User not found");
        return;
    }
    res.status(200).json({message : "User found", User : {
        userditales
    }})
        
    } catch (err) {
        res.status(500).json({error : err})
        console.error(err);
    }
    
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})