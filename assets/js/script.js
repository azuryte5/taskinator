//console.dir(window.document);
//querySelector()
//text.content
//addEventListener()
//timers
//clearInterval setInterval
//createElement() 
//appendChild()
//console.dir(taskNameInput)
//innerHTML
// var counter = 10
// var countdown = function (){
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//         console.log("blastoff");
//         clearInterval(startCountdown);
//     };
// };
// var startCountdown = setInterval(countdown, 1000);

// 1)Id the tag, get doc to look for it. Give it a variable
// 2)Define what you want it to do with an id/var
//3) create a function to repeat an adding of code when run
//4) run a new var with style/text. use appendchild to stick it somewhere
//5) pick the button that will kick off and how/function


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    console.dir(taskNameInput);

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
  };
 formEl.addEventListener("submit", createTaskHandler);