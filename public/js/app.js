
const PORT =5000;

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

let arrow = document.querySelector('.arrow')
arrow.addEventListener('click', goBack);

function goBack() {
    window.location.href = "http://localhost:5000/login.html";
}
event.preventDefault();