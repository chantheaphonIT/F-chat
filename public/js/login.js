function login(response, userName, password) {
    let users = response.data;

    for (let user of users) {
        if (user.username === userName && user.password === password) {
            localStorage.setItem("username", user.username);
            localStorage.setItem("color", user.color);
            sessionStorage.setItem("login", user.username);
            // window.location.href = "http://localhost:5000/index.html";
            isLogined();
        } else {
            console.log('No NO NNo No!')
        }
    }

}

function inputUser() {
    const user = document.querySelector('#user').value;
    const pass = document.querySelector("#pwd").value;

    // const url = "https://srsp-post-app.herokuapp.com/users";
    const url = "http://localhost:5000/users";


    axios
        .get(url)
        .then(res => login(res, user, pass))
};


const btnLogin = document.querySelector('#btn-login');
btnLogin.addEventListener('click', inputUser);


// let isLogined = sessionStorage.length > 0;
function isLogined() {
    window.location.href = "http://localhost:5000/home.html";
}