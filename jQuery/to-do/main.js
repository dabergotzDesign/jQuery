// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
// let list = document.querySelector("#list");
// list.addEventListener(
//   "click",
//   function(e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// Create a new list item when clicking on the "Add" button
function newTask() {
  let li = document.createElement("li");
  li.className = "task";
  let inputValue = document.getElementById("listInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Can't add empty list item");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("listInput").value = "";

  //Checkbox
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.id = "check";
  //mark as "done" when checkbox is checked
  checkbox.onclick = function() {
    let isDone = document.querySelectorAll("li");
    for (let i = 0; i < isDone.length; i++) {
      isDone[i].addEventListener("click", function done() {
        if (checkbox.checked == true) {
          isDone[i].style.backgroundColor = "green";
          console.log("done");
        } else {
          console.log("do it");
          isDone[i].style.backgroundColor = "#192549";
        }
      });
    }
  };
  li.appendChild(checkbox);

  //CLOSE BUTTON
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
