const IP = "192.168.1.9";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";

function addfood(event) {
    let chat_box = document.getElementById('chat_box');
    let van = document.createElement('div');
    van.className = 'msg';
    let span = document.createElement('span');
    span.textContent = text.value;
    van.appendChild(span);
    chat_box.appendChild(van);
    text.value = "";


};

const text = document.getElementById('text');
const addForm = document.querySelector("#send");
addForm.addEventListener("click", addfood);
//.........hide show.......

function longinDisplay() {
    form.style.display = "block";
    chat.style.display = "none";
    row.style.display = 'none';
    console.log("hello")

}
function displayMwssage() {
    event.preventDefault();
    form.style.display = "none";
    chat.style.display = "none";
    row.style.display = 'block';
}
let row = document.querySelector('.row');
let log = document.getElementById('log');
log.addEventListener('click', displayMwssage);
let chat = document.querySelector('.class-chat');

let form = document.querySelector('.form');


let btnf = document.getElementById('login');
btnf.addEventListener('click', longinDisplay);