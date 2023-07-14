"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createList;

var _index = require("./index");

/* eslint-disable linebreak-style */

/* eslint-disable prefer-const */

/* eslint-disable indent */

/* eslint-disable dot-notation */

/* eslint-disable func-names */
var list = {};

function createList() {
  var inputValue = document.getElementById('input');
  inputValue.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      var i = 0;
      list['description'] = inputValue.value;
      list['complete'] = false;
      list['index'] = i + 1;

      _index.tasks.push(list);

      (0, _index.displayTaskList)();
      console.log(_index.tasks);
    }
  });
}