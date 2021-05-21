// const express = require('express');
// const app = express();

// app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('public'));

// app.get('/', (req, res) => res.send("Hello Project"));



function addfood(event) {
    event.preventDefault();

    // 1- Get the book name from the input field
    result = ''
    let item1 = document.querySelector("#add-food-textfield1");

    let nameOfItem1 = item1.value;
    result = nameOfItem1


    let foodName = document.createElement("span");
    foodName.className = "name";
    foodName.textContent = result;


    // 4- Create a new li
    let li = document.createElement("li");
    // 5- Add bookName and deleteBtn to li and li to the bookList UL
    li.appendChild(foodName);

    foodList.appendChild(li);


    item1.value = "";

};
let addForm = document.getElementById("add-food");
addForm.addEventListener("send", addfood);