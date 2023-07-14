/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable dot-notation */
/* eslint-disable func-names */
import { tasks, displayTaskList } from "./index";

const list = {};
export default function createList() {
  const inputValue = document.getElementById('input');
  inputValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let i = 0;
      list['description'] = inputValue.value;
      list['complete'] = false;
      list['index'] = i + 1;
      tasks.push(list);
      displayTaskList();
      console.log(tasks);
    }
  });
}
