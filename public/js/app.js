// send mesage///
function sendMesage() {

    const ding = document.getElementById("dingSound");
    ding.play();

    let message = { name: localStorage.getItem("user"), text: messa.value };
    axios.post(url + "/send", message).then((res) => {
        displayMessage();
    })

}
/// show message //
function displayMessage() {
    let newUser = document.querySelector("#chat_box");
    let request = url + "/getmessage";

    axios.get(request).then((response) => {
        let data = response.data;
        for (message of data) {
            const fieldset = document.createElement("fieldset");
            if (message.name == "sreypich") {
                fieldset.style.backgroundColor = "orange";
            } else {
                fieldset.style.backgroundColor = "white";
            }
            const span = document.createElement("span");

            span.textContent = message.name + " : " + message.text;

            fieldset.appendChild(span);
            newUser.appendChild(fieldset);
        }
    })
    const listOfUser = document.querySelector(".listOfUser");

    if (listOfUser !== null) {
        listOfUser.remove();
    }

    const ding = document.getElementById("dingSound");
    ding.play();
    messa.value = "";

}
/// log out////
function backLogin() {
    window.location.href = "../index.html"
}
let btnBack = document.querySelector('.arrow');
btnBack.addEventListener('click', backLogin);


let messa = document.querySelector("#text");
let btnSend = document.querySelector("#send");
btnSend.addEventListener("click", sendMesage);
let url = "http://localhost:5000";
displayMessage();

let emoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
picker.on('emoji', emoji => {
    document.querySelector('#text').value += emoji;
});
emoji.addEventListener('click', () => {
    picker.togglePicker(emoji);
});
// bold and italic