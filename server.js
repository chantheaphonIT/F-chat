const express = require('express');
const app = express();
const fs = require("fs");

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());


// app.get('/', (req, res) => res.send("Hello Project"))

let users = [
    { username: "sreypich", password: "123" },
    { username: "chanthea", password: "123" }
];

app.use(express.static('public'));

app.get("/users", (req, res) => res.send(users))
    //login condition//
app.post("/login", (req, res) => {
    let name = req.body.name;
    let pass = req.body.password;
    let status = false;
    for (let user of users) {
        if (name === user.username && pass === user.password) {
            status = true;
        }
    }
    res.send(status);
    // can go to fontend
});
let messages = [];
messages = JSON.parse(fs.readFileSync("data.json"));
app.post("/send", (req, res) => {
    let message = req.body;
    messages.push(message);
    res.send(message)
    console.log(messages);
    fs.writeFileSync("data.json", JSON.stringify(messages));
})
app.get("/getmessage", (req, res) => {
    res.send(messages);
})