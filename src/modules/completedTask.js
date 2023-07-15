// eslint-disable-next-line
import { tasks, storeDateInLocalStorage, getDateFromLocalStorage, displayTaskList } from '../index.js';
import { chnageIndex } from '../crud.js';

export function checkedtasks(e, id) {
  if (e.target.type === 'checkbox') {
    tasks[id].complete = e.target.checked;
    storeDateInLocalStorage(tasks);
  }
}

export function completeAllTasks() {
  const task = getDateFromLocalStorage().filter((list) => list.complete === false);
  chnageIndex(task);
  storeDateInLocalStorage(task);
  displayTaskList();
}