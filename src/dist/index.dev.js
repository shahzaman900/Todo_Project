"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayTaskList = displayTaskList;
exports.tasks = void 0;

require("./style.css");

var _crud = _interopRequireDefault(require("./crud"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tasks = []; // document.addEventListener('DOMContentLoaded', () => {

exports.tasks = tasks;
var taskList = document.getElementById('todo_list_section');
var input = document.createElement('input');
input.id = 'input';
input.classList.add('input');
input.placeholder = 'Add to your list';
taskList.appendChild(input);
var list = document.createElement('ul');
list.classList.add('list');

function displayTaskList() {
  // Sort tasks based on index value
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
    description.textContent = task.description;
    var moreVert = document.createElement('span');
    moreVert.classList.add('material-symbols-outlined');
    moreVert.textContent = 'more_vert';
    listItem.appendChild(checkBox);
    listItem.appendChild(description);
    listItem.appendChild(moreVert);
    list.appendChild(listItem);
    taskList.appendChild(list);
  });
}

var button = document.createElement('button');
button.classList.add('btn');
button.textContent = 'Clear all complete';
taskList.appendChild(button);
displayTaskList();
(0, _crud["default"])(); // });