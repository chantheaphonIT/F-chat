//log in///
function getLogin() {

    let user = { name: username.value, password: password.value };
    axios.post(url + "/login", user).then((res) => {
        if (res.data) {
            localStorage.setItem("user", username.value);
            localStorage.setItem("password", password.value);

            window.location.pathname = "home.html";
            // other page
        } else {
            alert("Please try again!");
        }
    })


}
let username = document.querySelector("#user");
let password = document.querySelector("#pwd");
//when we click btn it will show//
let btnLogign = document.querySelector("#btn-login");
btnLogign.addEventListener("click", getLogin);

let url = "https://f-chat-app-project.herokuapp.com";