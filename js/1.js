const taskForm = document.getElementById('taskForm');
const taskName = document.getElementById('taskName');
const taskDesc = document.getElementById('taskDesc');
let formValid = false;

function addTask(){
    let valArr = [taskName,taskDesc]
    for (let i = 0; i < valArr.length; i++) {
       
        validate(valArr[i])     
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

function sendForm(arr){
    console.log('arr', arr)
}
// prevent page from reloading after submit
document.getElementById("taskForm").addEventListener("click", function(event){
    event.preventDefault()
  });