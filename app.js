
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

    todo.appendChild(completeButton);
    todo.appendChild(deleteButton);
    todo.style.animation = "scaleUp 1s forwards"


    section.appendChild(todo);

})