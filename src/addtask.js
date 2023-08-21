export function addtask() {
    document.addEventListener("DOMContentLoaded", function () {
      
        const addTaskIcon = document.getElementById("addtask");
        const addTaskForm = document.getElementById("addTaskForm");
        const taskForm = document.getElementById("taskForm");
        const cross = document.getElementById("cross");
      
        addTaskIcon.addEventListener("click", () => {
          
          addTaskForm.classList.add("active");
        });
        cross.addEventListener("click", () => {
          addTaskForm.classList.remove("active");
        })
      
        taskForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const task_template = document.querySelector("#task-template");
          const clone_task = task_template.content.cloneNode(true);
          const difficultySelect = document.querySelector("input[name='difficulty']:checked");

          const taskInput = document.querySelector("#taskName").value;
          clone_task.querySelector("#task").textContent = taskInput;

          const todoList = document.getElementById("todo_task");
          const selectedDifficulty = difficultySelect.value;
          const difficultyColors = {
            Easy: "rgba(66, 255, 0, 0.56)",
            Medium: "rgba(240, 164, 16, 0.56)",
            Hard: "rgba(255, 0, 0, 0.56)"
          };
          clone_task.querySelector("#task").textContent = taskInput;
          clone_task.querySelector("#difficulty").textContent = selectedDifficulty;
          clone_task.querySelector("#difficulty").style.backgroundColor = difficultyColors[selectedDifficulty];
          todoList.appendChild(clone_task);

          taskForm.reset();
          addTaskForm.classList.remove("active");
        });
      });
}