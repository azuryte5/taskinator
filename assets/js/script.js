//console.dir(window.document);
//querySelector()
//text.content
//addEventListener()
//timers
//clearInterval setInterval
//createElement() 
//appendChild()
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


var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };
 buttonEl.addEventListener("click", createTaskHandler);