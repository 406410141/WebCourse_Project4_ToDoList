let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    e.preventDefault();

    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDay = form.children[2].value;
    console.log(todoText, todoDay, todoMonth);

    if (todoText === "") {
        alert("Please Enter Event Name");
        return;
    }

    let todo = document.createElement("div");
    todo.classList.add("todo");

    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;

    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth + " / " + todoDay;

    todo.appendChild(text);
    todo.appendChild(time);

    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        console.log(e);
        todoItem.classList.toggle("done");
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        todoItem.addEventListener("animationend", () => {
            let text = todoItem.children[0].innerText;
            let myListArray = JSON.parse(localStorage.getItem("list"));
            myListArray.forEach((item, index) => {
                if (item.todoText == text) {
                    myListArray.splice(index, 1);
                    localStorage.setItem("list", JSON.stringify(myListArray));
                }
            });
            todoItem.remove();
        });
        todoItem.style.animation = "scaleDown 0.3s forwards";
    });

    todo.appendChild(completeButton);
    todo.appendChild(deleteButton);
    todo.style.animation = "scaleUp 1s forwards";

    let myTodo = {
        todoText: todoText,
        todoMonth: todoMonth,
        todoDay: todoDay
    }

    let myList = localStorage.getItem("list");
    console.log(myList);
    if (myList == null) {
        localStorage.setItem("list", JSON.stringify([myTodo]));
    } else {
        let myListArray = JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list", JSON.stringify(myListArray));

    }
    console.log(JSON.parse(localStorage.getItem("list")));

    form.children[0].value = "";
    section.appendChild(todo);
});

let myList = localStorage.getItem("list");
if (myList !== null) {
    myListArray = JSON.parse(myList);
    myListArray.forEach(item => {
        let todo = document.createElement("div");
        todo.classList.add("todo");

        let text = document.createElement("p");
        text.classList.add("todo-text");
        text.innerText = item.todoText;

        let time = document.createElement("p");
        time.classList.add("todo-time");
        time.innerText = item.todoMonth + " / " + item.todoDay;

        let completeButton = document.createElement("button");
        completeButton.classList.add("complete");
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completeButton.addEventListener("click", e => {
            let todoItem = e.target.parentElement;
            console.log(e);
            todoItem.classList.toggle("done");
        });

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener("click", e => {
            let todoItem = e.target.parentElement;
            todoItem.addEventListener("animationend", () => {
                let text = todoItem.children[0].innerText;
                let myListArray = JSON.parse(localStorage.getItem("list"));
                myListArray.forEach((item, index) => {
                    if (item.todoText == text) {
                        myListArray.splice(index, 1);
                        localStorage.setItem("list", JSON.stringify(myListArray));
                    }
                });
                todoItem.remove();
            });
            todoItem.style.animation = "scaleDown 0.3s forwards";
        });

        todo.appendChild(text);
        todo.appendChild(time);
        todo.appendChild(completeButton);
        todo.appendChild(deleteButton);
        section.appendChild(todo);
    });
}


