
let section =document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e=>{
    //  prevent form being submited
    e.preventDefault();
 


    //get the input value
    //console.log form
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDay = form.children[2].value;
    console.log(todoText,todoDay,todoMonth);
    
    if (todoText === ""){
        alert("Please Enter Event Name");
        return
        //return 後後面的程式碼不會被執行
    }
 
    //create todo list 
    let todo  = document.createElement("div");
    todo.classList.add("todo");

    let text  = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;
    
    let time  = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth +" / "+todoDay;

    todo.appendChild(text);
    todo.appendChild(time);

    
    
    //create button
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML= '<i class="fa-solid fa-check"></i>';
    completeButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        console.log(e);
        todoItem.classList.toggle("done");
    })

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';

    deleteButton.addEventListener("click", e=>{
        //console.log(e.target);
        let todoItem = e.target.parentElement;
        todoItem.addEventListener("animationend",  ()=>{
            todoItem.remove();
        })
        todoItem.style.animation = "scaleDown 0.3s forwards";
        //console.log(todoItem);
       // todoItem.remove();

    })

    todo.appendChild(completeButton);
    todo.appendChild(deleteButton);
    todo.style.animation = "scaleUp 1s forwards"

    //create object 
    let myTodo = {
        todoText : todoText,
        todoMonth: todoMonth,
        todoDay : todoDay

    }

    let myList = localStorage.getItem("list");
    //console.log(myList);
    if(myList ==null){
        localStorage.setItem("list",JSON.stringify([myTodo]));
    }else{
        let myListArray = JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list",JSON.stringify([myListArray]));

    }
    console.log(JSON.parse(localStorage.getItem("list")));

    form.children[0].value = "";//clear string 新增後
    section.appendChild(todo);

})