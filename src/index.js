import './style.css';
// eslint-disable-next-line import/no-cycle
import {
  createList, deleteList, updateList, updateDescription,
} from './crud.js';

// eslint-disable-next-line import/no-mutable-exports
export let tasks = [];

const taskList = document.getElementById('todo_list_section');

const input = document.createElement('input');
input.id = 'input';
input.classList.add('input');
input.placeholder = 'Add to your list';
taskList.appendChild(input);

const list = document.createElement('ul');
list.id = 'list';
list.classList.add('list');

const button = document.createElement('button');
button.classList.add('btn');
button.textContent = 'Clear all complete';
taskList.appendChild(button);

export function storeDateInLocalStorage(tasks) {
  const storedList = JSON.stringify(tasks);
  localStorage.setItem('books', storedList);
}

export function getDateFromLocalStorage() {
  const storedList = localStorage.getItem('books');
  tasks = storedList ? JSON.parse(storedList) : [];
  return tasks;
}

export function displayTaskList() {
  getDateFromLocalStorage();
  list.innerHTML = '';
  // Sort tasks based on index value
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list_item');

    const checkBox = document.createElement('span');
    checkBox.classList.add('material-symbols-outlined');
    checkBox.textContent = 'check_box_outline_blank';

    const description = document.createElement('p');
    description.id = 'p';
    description.textContent = task.description;
    description.addEventListener('click', () => updateList(task.index));

    const updatedinput = document.createElement('input');
    updatedinput.id = 'updatedinput';
    updatedinput.classList.add('updatedinput');
    updatedinput.placeholder = task.description;
    updatedinput.style.display = 'none';
    updatedinput.style.padding = '0.5rem';
    updatedinput.addEventListener('click', () => updateDescription(task.index));

    const Delete = document.createElement('span');
    Delete.classList.add('material-symbols-outlined');
    Delete.textContent = 'delete';
    Delete.id = 'delete';
    Delete.addEventListener('click', () => deleteList(task.index));

    listItem.appendChild(checkBox);
    listItem.appendChild(description);
    listItem.appendChild(updatedinput);
    listItem.appendChild(Delete);

    list.appendChild(listItem);

    taskList.appendChild(list);
  });
}

displayTaskList();
createList();
