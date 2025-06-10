"use strict";
let input = document.getElementById("task");
document.getElementById("add").addEventListener("click", li);

function li(event) {
  event.preventDefault();

  let listItem = document.createElement("li");

  listItem.innerHTML = input.value;

  document.getElementById("list").appendChild(listItem);
}
