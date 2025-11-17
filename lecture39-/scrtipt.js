const btn = document.querySelector("button");
const todos = document.querySelector("#todo-items");
const input = document.querySelector("input");



//empty array to store object of todo
let todo = [] //cant use const here because when we again try to empty it ,
// it will unable to access i mean change as it is constant

// Add Todo
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    if (!inputValue) return

    // add Todo
    const obj = {} //empty obj to store todo
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-items");

    obj.todo = inputValue;
    todo.push(obj);

    console.log(todo)


    //iterating over array of object:

    todoItem.innerHTML = todo.map((list) => {
        return `
        <p>${list.todo}</p>
        <input class="edit-input" type="text" style="display:none;" />
        <div class="todo-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `
    }).join("")

    todo = []  //thats what im talking above

    
    //iterating directly on object:

    // todoItem.innerHTML =Object.entries(obj).map(([key,value])=>{
    //    return `
    //     <p>${value}</p>
    //     <input class="edit-input" type="text" style="display:none;" />
    //     <div class="todo-buttons">
    //         <button class="edit-btn">Edit</button>
    //         <button class="delete-btn">Delete</button>
    //     </div>
    // `
    // }).join("")

    //normal way without creating any object:

    // todoItem.innerHTML = `
    //     <p>${inputValue}</p>
    //     <input class="edit-input" type="text" style="display:none;" />
    //     <div class="todo-buttons">
    //         <button class="edit-btn">Edit</button>
    //         <button class="delete-btn">Delete</button>
    //     </div>
    // `;



    todos.append(todoItem);

    input.value = "";


    //  obj={}
    const deleteBtn = todoItem.querySelector(".delete-btn");
    const editBtn = todoItem.querySelector(".edit-btn");

    //edit,save
    editBtn.addEventListener("click", () => {
        const pTag = todoItem.querySelector("p");
        const editedInput = todoItem.querySelector(".edit-input");

        if (editBtn.textContent === "Edit") {
            editedInput.style.display = "block";
            editedInput.style.margin = "10px";
            pTag.style.display = "none";
            editedInput.value = pTag.textContent
            editBtn.textContent = "Save"

        } else {
            editedInput.style.display = "none";
            pTag.style.display = "block";
            pTag.textContent = editedInput.value
            editBtn.textContent = "Edit"
        }
    });

    // delete
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
    });
});