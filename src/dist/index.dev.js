"use strict";

require("./style.css");

var tasks = [{
  description: 'task 1',
  complete: true,
  index: 1
}, {
  description: 'task 2',
  complete: true,
  index: 2
}, {
  description: 'task 3',
  complete: true,
  index: 4
}, {
  description: 'task 4',
  complete: true,
  index: 3
}];
document.addEventListener('DOMContentLoaded', function () {
  var taskList = document.getElementById('todo_list_section');

  function displayTaskList() {
    // Sort tasks based on index value
    tasks.sort(function (a, b) {
      return a.index - b.index;
    });
    tasks.forEach(function (task) {
      var list = document.createElement('ul');
      list.classList.add('list');
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

  displayTaskList();
});