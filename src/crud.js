// eslint-disable-next-line import/no-cycle
import {
  tasks, displayTaskList, storeDateInLocalStorage, getDateFromLocalStorage,
} from './index.js';

function addTask(description) {
  const id = getDateFromLocalStorage().length;
  const task = { description, complete: false, index: id + 1 };
  tasks.push(task);
  storeDateInLocalStorage(tasks);
  displayTaskList();
}

function handleKeyPress(e) {
  const inputValue = document.getElementById('input');
  const description = inputValue.value;
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask(description);
    inputValue.value = '';
  }
}

export function createList() {
  const inputValue = document.getElementById('input');
  inputValue.addEventListener('keypress', handleKeyPress);
}

// chnageIndex
export function chnageIndex(array) {
  array.forEach((list, index) => {
    list.index = index + 1;
  });
}

// delete list
export function deleteList(id) {
  const filterArray = getDateFromLocalStorage().filter((list) => list.index !== id);
  chnageIndex(filterArray);
  storeDateInLocalStorage(filterArray);
  displayTaskList();
}

// updateUIState
export function updateDescription(e, id) {
  e.target.style.display = 'flex';
  const updatedInput = document.getElementById('updatedinput');
  const description = document.getElementById('p');
  updatedInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const updatedDescription = updatedInput.value;
      const data = getDateFromLocalStorage();
      const updatedData = data.map((item) => {
        if (item.index === id) {
          return { ...item, description: updatedDescription };
        }
        return item;
      });
      storeDateInLocalStorage(updatedData);
      displayTaskList();
      updatedInput.style.display = 'none';
      description.style.display = 'flex';
    }
  });
}

export function updateList(e) {
  const updatedInput = document.getElementById('updatedinput');
  e.target.style.display = 'none';
  updatedInput.style.display = 'flex';
}
