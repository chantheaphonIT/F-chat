// const express = require('express');
// const app = express();

// app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('public'));

// app.get('/', (req, res) => res.send("Hello Project"));



function addfood(event) {
    let chat_box = document.getElementById('chat_box');
    let van = document.createElement('div');
    van.className = 'msg';
    let span = document.createElement('span');
    span.textContent = text.value;
    van.appendChild(span);
    chat_box.appendChild(van);
    text.value="";
    

};

const text = document.getElementById('text');
const addForm = document.querySelector("#send");
addForm.addEventListener("click", addfood);