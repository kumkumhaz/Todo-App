// app.js
const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const deleteTaskbtn = document.getElementById("deleteall-task");


showTask();

addTaskButton.addEventListener("click", (e)=>{
  e.preventDefault();
  if(taskInput.value == ''){
    alert("Add a task!")
  }
if(  taskInput.value.trim() !=0){

  let localwebtask = localStorage.getItem("localtask");
  if(localwebtask === null){
    myTasks = [];
  }else{
    myTasks = JSON.parse(localwebtask);
  }
  myTasks.push(taskInput.value);
  localStorage.setItem("localtask", JSON.stringify(myTasks));
  taskInput.value = "";
}
  // const newTask = document.createElement("li");
  // newTask.innerHTML = taskInput.value;
  // taskList.appendChild(newTask);
  // taskInput.value = "";
showTask();
 
})

function showTask(){

  let localwebtask = localStorage.getItem("localtask");
  if(localwebtask === null){
    myTasks = [];
  }else{
    myTasks = JSON.parse(localwebtask);
  }
    
  let taskHTML= '';
  myTasks.forEach((item, index) => {
   taskHTML += `
  
   <li class ="myTasks">
   <div class="taskadddelete">
     <button class = 'editbtn' id= ${index} onclick ="editTask(${index})" >Edit</button>
     <button class='deletebtn' id=" ${index}" onclick = "deleteTask(${index})">Delete</button>
   </div>
     <div class="addnote">${item}</div>
    </li>
 `
 taskList.innerHTML = taskHTML;   
  });
}


function editTask(index){
  let saveinput = document.getElementById("saveinput");
  saveinput.value = index;
  let localwebtask = localStorage.getItem("localtask");
  if(localwebtask === null){
    myTasks = [];
  }else{
    myTasks = JSON.parse(localwebtask);
  }
  let saveTaskbtn = document.getElementById("save-task");
  taskInput.value = myTasks[index];
  addTaskButton.style.display ="none";
  saveTaskbtn.style.display = "block";
 
}

//save task / update task
let saveTaskbtn = document.getElementById("save-task");
saveTaskbtn.addEventListener('click', function(){
  let localwebtask = localStorage.getItem("localtask");
  if(localwebtask === null){
    myTasks = [];
  }else{
    myTasks = JSON.parse(localwebtask);
  }
  let saveinput = document.getElementById("saveinput").value;
   myTasks[saveinput] = taskInput.value;
   localStorage.setItem("localtask", JSON.stringify(myTasks));
   showTask();

})

// detele list task
function deleteTask(index){
  let localwebtask = localStorage.getItem("localtask");
  if(localwebtask === null){
    myTasks = [];
  }else{
    myTasks = JSON.parse(localwebtask);
  }

  myTasks.splice(index,1);
  localStorage.setItem("localtask", JSON.stringify(myTasks));
  showTask();
}

//delete all tasks



deleteTaskbtn.addEventListener("click", function(){ 
  localStorage.clear();
  showTask();
})

