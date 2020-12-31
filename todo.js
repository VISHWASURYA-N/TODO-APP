let addTodo=document.querySelector(".addtodo");
let ul=document.querySelector("ul");
addTodo.addEventListener("submit",(e)=>{
    e.preventDefault();
    let todo=addTodo.add.value.trim();
    // console.log(todo); 
    if(todo.length>0){
        getTodo(todo);
        addTodo.reset();
    }
});
let getTodo=(todo)=>{
    let html=` <li><span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`
    ul.innerHTML+=html
}
ul.addEventListener("click",(e)=>{
    // console.log(e.targe);
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }

});
let search=document.querySelector(".search input");
search.addEventListener("input",()=>{
    let searchValue=search.value.trim();
    // console.log(searchValue);
    searchTodo(searchValue)
})
let searchTodo=(value)=>{
 Array.from(ul.children).filter((item)=>{
        return ! item.textContent.includes(value)
    }).forEach(item=>{
        item.classList.add("remove");
    })

    Array.from(ul.children).filter((item)=>{
        return  item.textContent.includes(value)
    }).forEach(item=>{
        item.classList.remove("remove");
    })
}