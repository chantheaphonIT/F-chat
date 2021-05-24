// const express = require('express');
// const app = express();

// app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('public'));

// app.get('/', (req, res) => res.send("Hello Project"));


function longinDisplay() {
    form.style.display = "block";
    chat.style.display = "none";
    console.log("hello")

}
let chat = document.querySelector('.class-chat');

let form = document.querySelector('.form');


let btnf = document.getElementById('login');
btnf.addEventListener('click', longinDisplay);