const taskForm = document.getElementById('taskForm');
const taskName = document.getElementById('taskName');
const taskDesc = document.getElementById('taskDesc');
const taskDueDate = document.getElementById('taskDueDate');
const taskBoard = document.getElementById('taskBoard');

let formValid = false;

function addTask(){
    let valArr = [taskName,taskDesc,taskDueDate]
    for (let i = 0; i < valArr.length; i++) {
        validate(valArr[i])     
    }
    if(!taskDueDate) {
        return false
    }
     formValid ? sendForm(valArr) : null;
}

function validate(a){
    
    if(!a.value){
        a.style.border='1px solid red';
        alert( a.getAttribute("name") + ' Cannot be empty');

    }else{
        a.style.border='1px solid blue';
        formValid = true;  
    }
    
}
function drawCard(arr){

    const divCard = document.createElement("div");
    divCard.className = "card column is-one-quarter";
    const divCardContent = document.createElement("div");
    divCardContent.className = "card-content";
    const mediaCard = document.createElement("div");
    mediaCard.className = "media-content";
    const titleCard = document.createElement("p");
    titleCard.className = "title is-4";
    const divCardContentInner = document.createElement("div");
    divCardContentInner.className = "content";
    const br = document.createElement("br");
    const timeCard = document.createElement("time");
    timeCard.datetime = arr[1].value;
    timeCard.innerHTML= arr[1].value;
    titleCard.innerHTML= arr[1].value;
    divCardContentInner.innerHTML= arr[0].value;
    divCardContentInner.appendChild(br);
    divCardContentInner.appendChild(timeCard);
    mediaCard.appendChild(titleCard);
    divCardContent.appendChild(mediaCard);
    divCard.appendChild(divCardContentInner);
    divCard.appendChild(divCardContent);
    taskBoard.appendChild(divCard)
}
function sendForm(arr){
    drawCard(arr)
}
// prevent page from reloading after submit
document.getElementById("taskForm").addEventListener("click", function(event){
    event.preventDefault()
  });