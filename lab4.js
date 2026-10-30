"use strict";
let tasks = [];
let d = document.getElementById('display');
function addTask() {
    let input = document.getElementById('TaskName');
    tasks.push(input.value);
    render();
}
function render() {
    let p = document.createElement('p');
    p.textContent = tasks[tasks.length - 1];
    d.appendChild(p);
}
