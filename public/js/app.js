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