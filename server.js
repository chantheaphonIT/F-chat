

const express = require('express')
const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let users = [
    {username: "sreypich", color: "red", text: "hello everyone how are you"},
    {username: "chanthea", color: "green", text: "yes hello i'm fine. thank"},

]
app.get ('/users',(req,res)=>res.send(users))



// get users to updat




