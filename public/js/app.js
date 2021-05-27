function sendMesage() {

    const ding = document.getElementById("dingSound");
    ding.play();

    let message = { name: localStorage.getItem("user"), text: messa.value };
    axios.post(url + "/send", message).then((res) => {
        displayMessage();
    })

}

function displayMessage() {
    let storeOfNewUser = document.querySelector("#chat_box");
    let request = url + "/getmessage";
    axios.get(request).then((response) => {
        let data = response.data;
        for (message of data) {
            const fieldset = document.createElement("fieldset");
            if (message.name == "sreypich") {
                fieldset.style.backgroundColor = "orange";
            } else {
                fieldset.style.backgroundColor = "green";
            }
            const spanOfInput = document.createElement("span");
            spanOfInput.textContent = message.name + " : " + message.text;
            fieldset.appendChild(spanOfInput);
            storeOfNewUser.appendChild(fieldset);
        }
    })
    const listOfUser = document.querySelector(".listOfUser");

    if (listOfUser !== null) {
        listOfUser.remove();
    }

    // const ding = document.getElementById("dingSound");
    // ding.play();
    messa.value = "";

}



let messa = document.querySelector("#text");
let btnSend = document.querySelector("#send");
btnSend.addEventListener("click", sendMesage);
let url = "http://localhost:5000";
displayMessage();