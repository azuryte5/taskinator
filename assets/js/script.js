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

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  formEl.reset();
  createTaskEl(taskDataObj)
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};
formEl.addEventListener("submit", taskFormHandler);
