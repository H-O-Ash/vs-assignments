document.getElementById("submit").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    e.preventDefault()
    e.frm.reset()
})


function createSubItem(e){
    const subItem = document.createElement("li")
    var subItemValue = document.getElementById("title").value
    var div = document.createElement("div")
    var edit = document.createElement("button")
    var del = document.createElement("button")
    var save = document.createElement("button")
    del.textContent = "X"
    del.addEventListener('click', function(e) {
        e.preventDefault();
        subItem.remove();
    })
    edit.addEventListener('click', function(e){
        e.preventDefault();
        if (edit.textContent == "Edit"){
            div.contentEditable = true;
            edit.textContent = "Save"
        } else if(edit.textContent == "Save"){
            div.contentEditable = false;
            edit.textContent = "Edit"
        }
    })
    


    edit.textContent = "Edit"
    div.textContent = subItemValue
    save.textContent = "Save"
    subItem.appendChild(div)
    subItem.appendChild(del)
    subItem.appendChild(edit)
    subItem.setAttribute("class", "subItem")
    return subItem
}
