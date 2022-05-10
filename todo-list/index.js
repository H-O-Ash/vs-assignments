function getData(){
    axios.get("https://api.vschool.io/hunterashley/todo")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}
function listData(data){    
    clearList()
    for(let i = 0; i < data.length; i++){
        image(data[i])
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
        h1.id = data[i].completed ? "strike" : ""
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        document.getElementById('todo-list').appendChild(checkbox)
        checkbox.checked = data[i].completed
        checkbox.id = "checkbox"
        checkbox.addEventListener("change", function(e){
            e.preventDefault();
            if(checkbox.checked){
                completed(e)
                h1.id = "strike"
            } else {
                notComplete(e)
                h1.id = ""
            }
        })
        const complete = document.createElement('p')
        complete.textContent = "Completed? "
        delete(data[i])
        document.getElementById('todo-list').appendChild(complete)
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "delete"
        deleteButton.id = "delete"
        document.getElementById('todo-list').appendChild(deleteButton)
        deleteButton.addEventListener("click", function(e){
            deleteTodo(data[i]._id)
        })
        const br = document.createElement('br')
        document.getElementById('todo-list').appendChild(br)
    }
}

function image(element){
    const img = document.createElement('img')
    img.src = element.imgUrl
    document.getElementById('todo-list').appendChild(img)
}
function clearList(){
    const element = document.getElementById('todo-list')
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
getData()
/////////////////////////entries///////////////////////////////
function strikeout(completed){
    if(completed === true){
        h1.id = "strike"
    } else{
        h1.id = ""
    }
}
/////////////////////////Delete////////////////////////////////
var deleteTodo = function(entry) {
    axios.delete("https://api.vschool.io/hunterashley/todo/" + entry).then(function(response) {
        clearList()
        getData()
    }, function(response) {
        alert("There was a problem deleting your todo :(");
    });
}
///////////////////FORM/////////////////////////////////////////
const todoForm = document.todoform
todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
    };
    
    axios.post("https://api.vschool.io/hunterashley/todo",newTodo)
    .then(response => getData())
    .catch(error => console.log(error))
    
    todoForm.reset()
})
////////////////////////////PUT/////////////////////////////////
const completed = function(e){
    const updateT = {
        completed: true,
    }
    axios.put("https://api.vschool.io/hunterashley/todo/" + e, updateT)
}
const notComplete = function(e){
    const updateF = {
        completed: false,
    }
    axios.put("https://api.vschool.io/hunterashley/todo/" + e, updateF)
}
