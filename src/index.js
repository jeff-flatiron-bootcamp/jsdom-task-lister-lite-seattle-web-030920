document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const inputField = document.getElementById("new-task-description")
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let listItem = inputField.value
    let priorityLevel = document.getElementById("priority").value

    let newLI = document.createElement('li')
    newLI.innerText = listItem
    newLI.classList.toggle(priorityLevel, true)

    let button = document.createElement('button')
    button.textContent = "X"
    button.onclick = function(){
        button.parentElement.remove();
        return;}

    taskList.appendChild(newLI)
    newLI.appendChild(button)

    inputField.value = ""
    //sayHi();
    sortListItems(taskList)
  })

  //function sayHi() {console.log("hello")}

  function sortListItems(parentEl){
    let newArray = Array.from(parentEl.children)    
    function compare_item(a, b) {         
      function convertSelection (input) {
        if(input == "high")
          return 3;
        else if (input == "medium")
          return 2;
        else
          return 1;
      }

      value1 = convertSelection(a.className);
      value2 = convertSelection(b.className);      
      if(value1 > value2)
        return 1        
      else if (value1 < value2)
        return -1
      else if (value1 == value2)
        return 0        
    }    
    sortedArray = newArray.sort(compare_item);      
    
    while (parentEl.firstChild) {
      parentEl.removeChild(parentEl.lastChild);
    }

    sortedArray.forEach(element => parentEl.appendChild(element))
  }

});
