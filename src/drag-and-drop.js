export function draganddrop(){
    const list = document.querySelectorAll("ul");
    const li = document.querySelectorAll("li");
    li.forEach(item => {
      item.addEventListener("dragstart", (e) => {
        let selected = e.target;
        
        list.forEach(item => {
          item.addEventListener("dragover", function(e){
            e.preventDefault();
          })
        })
        list.forEach(item => {
          item.addEventListener("drop", function(e){
            if(selected !== null){
              item.appendChild(selected);
              if (selected.parentElement.id === "todo_task") {
                  selected.querySelector("svg > path").setAttribute("stroke", "#FF0000");
                  selected.querySelector("svg > circle").setAttribute("stroke", "#FF0000");
                } else if (selected.parentElement.id === "in-progress_task") {
                    selected.querySelector("svg > path").setAttribute("stroke", "#F0A410");
                    selected.querySelector("svg > circle").setAttribute("stroke", "#F0A410");
                } else if (selected.parentElement.id === "done_task") {
                    selected.querySelector("svg > path").setAttribute("stroke", "#42FF00");
                    console.dir(selected.querySelector("svg > path").attributes);
                    selected.querySelector("svg > circle").setAttribute("stroke", "#42FF00");
                }    
              const tasks = [];
              const taskElements = document.querySelectorAll("li");
              taskElements.forEach(taskElement => {
                const taskName = taskElement.querySelector("#task").textContent;
                const difficulty = taskElement.querySelector("#difficulty").textContent;
                const list = taskElement.parentElement.id;
                tasks.push({ task: taskName, difficulty: difficulty, listid: list });
                localStorage.setItem("tasks", JSON.stringify(tasks));
              });
              selected = null;
            }

          })
        })
      })
    })
    // Initial load of tasks from local storage
    document.addEventListener("DOMContentLoaded", function() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => {
          const item = document.querySelector("li")
           // Assuming the ID of the li is the task name
          if (item) {
              const list = document.getElementById(task.listid);

              if (list) {
                  item.querySelector("svg > path").setAttribute("stroke", getStrokeColor(task.listid));
                  item.querySelector("svg > circle").setAttribute("stroke", getStrokeColor(task.listid));
                  list.appendChild(item);
              }
              function getStrokeColor(listId) {
                if (listId === "todo_task") {
                  return "#FF0000";
                } else if (listId === "in-progress_task") {
                  return "#F0A410";
                } else if (listId === "done_task") {
                  return "#42FF00";
                }
                return ""; // Default stroke color
              }
          }
      }
      );
  });
    
}