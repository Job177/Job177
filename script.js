const todoitems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("srh");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
        addItem();
})
function addItem(){
    var divparent = document.createElement("div");
    var divchild = document.createElement("div");
    var checkicon = document.createElement("i");
    var trashicon = document.createElement("i");
    

    divparent.className = "item";
    divparent.innerHTML = '<div>'+ input.value +'</div>';

    checkicon.className = "fas fa-check-square";
    checkicon.style.color = "lightgrey";

    checkicon.addEventListener("click", function(){
        checkicon.style.color = "blue";
    });
    
    divchild.appendChild(checkicon);

    trashicon.className = "fas fa-trash";
    trashicon.style.color = "lightgrey";

    trashicon.addEventListener("click", function(){
        divparent.remove();
    });
    divchild.appendChild(trashicon);
    divparent.appendChild(divchild);
    todoitems.appendChild(divparent);
    
    input.value = '';
};
