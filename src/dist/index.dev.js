"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeDateInLocalStorage = storeDateInLocalStorage;
exports.getDateFromLocalStorage = getDateFromLocalStorage;
exports.displayTaskList = displayTaskList;
exports.tasks = void 0;

require("./style.css");

var _crud = require("./crud.js");

// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-mutable-exports
var tasks = [];
exports.tasks = tasks;
var taskList = document.getElementById('todo_list_section');
var input = document.createElement('input');
input.id = 'input';
input.classList.add('input');
input.placeholder = 'Add to your list';
taskList.appendChild(input);
var list = document.createElement('ul');
list.id = 'list';
list.classList.add('list');
var button = document.createElement('button');
button.classList.add('btn');
button.textContent = 'Clear all complete';
taskList.appendChild(button);

function storeDateInLocalStorage(tasks) {
  var storedList = JSON.stringify(tasks);
  localStorage.setItem('books', storedList);
}

function getDateFromLocalStorage() {
  var storedList = localStorage.getItem('books');
  exports.tasks = tasks = storedList ? JSON.parse(storedList) : [];
  return tasks;
}

function displayTaskList() {
  getDateFromLocalStorage();
  list.innerHTML = ''; // Sort tasks based on index value

  tasks.sort(function (a, b) {
    return a.index - b.index;
  });
  tasks.forEach(function (task) {
    var listItem = document.createElement('li');
    listItem.classList.add('list_item');
    var checkBox = document.createElement('span');
    checkBox.classList.add('material-symbols-outlined');
    checkBox.textContent = 'check_box_outline_blank';
    var description = document.createElement('p');
    description.id = 'p';
    description.textContent = task.description;
    description.addEventListener('click', function () {
      return (0, _crud.updateList)(task.index);
    });
    var updatedinput = document.createElement('input');
    updatedinput.id = 'updatedinput';
    updatedinput.classList.add('updatedinput');
    updatedinput.placeholder = task.description;
    updatedinput.style.display = 'none';
    updatedinput.style.padding = '0.5rem';
    updatedinput.addEventListener('click', function () {
      return (0, _crud.updateDescription)(task.index);
    });
    var Delete = document.createElement('span');
    Delete.classList.add('material-symbols-outlined');
    Delete.textContent = 'delete';
    Delete.id = 'delete';
    Delete.addEventListener('click', function () {
      return (0, _crud.deleteList)(task.index);
    });
    listItem.appendChild(checkBox);
    listItem.appendChild(description);
    listItem.appendChild(updatedinput);
    listItem.appendChild(Delete);
    list.appendChild(listItem);
    taskList.appendChild(list);
  });
}

displayTaskList();
(0, _crud.createList)();