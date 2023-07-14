"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createList = createList;
exports.deleteList = deleteList;
exports.updateDescription = updateDescription;
exports.updateList = updateList;

var _index = require("./index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addTask(description) {
  var id = (0, _index.getDateFromLocalStorage)().length;
  var task = {
    description: description,
    complete: false,
    index: id + 1
  };

  _index.tasks.push(task);

  (0, _index.storeDateInLocalStorage)(_index.tasks);
  (0, _index.displayTaskList)();
}

function handleKeyPress(e) {
  var inputValue = document.getElementById('input');
  var description = inputValue.value;

  if (e.key === 'Enter') {
    e.preventDefault();
    addTask(description);
    inputValue.value = '';
  }
}

function createList() {
  var inputValue = document.getElementById('input');
  inputValue.addEventListener('keypress', handleKeyPress);
} // chnageIndex


function chnageIndex(array) {
  array.forEach(function (list, index) {
    list.index = index + 1;
  });
} // delete list


function deleteList(id) {
  var filterArray = (0, _index.getDateFromLocalStorage)().filter(function (list) {
    return list.index !== id;
  });
  chnageIndex(filterArray);
  (0, _index.storeDateInLocalStorage)(filterArray);
  (0, _index.displayTaskList)();
} // updateUIState


function updateDescription(id) {
  var updatedInput = document.getElementById('updatedinput');
  var description = document.getElementById('p');
  updatedInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      var updatedDescription = updatedInput.value;
      var data = (0, _index.getDateFromLocalStorage)();
      var updatedData = data.map(function (item) {
        if (item.index === id) {
          return _objectSpread({}, item, {
            description: updatedDescription
          });
        }

        return item;
      });
      (0, _index.storeDateInLocalStorage)(updatedData);
      (0, _index.displayTaskList)();
      updatedInput.style.display = 'none';
      description.style.display = 'flex';
    }
  });
}

function updateList() {
  var updatedInput = document.getElementById('updatedinput');
  var description = document.getElementById('p');
  updatedInput.style.display = 'flex';
  description.style.display = 'none';
}