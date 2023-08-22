//J'importe la fonction menu afin de pouvoir ciblé les tâches crées avec ma fonction "menu"
import { menu } from "./menu";
import { toggleDarkMode } from "./darkmode";

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
          toggleDarkMode();
          menu();
          removetask();

          //Sauvegarde des tâches dans le localstorage
          // Cette ligne de code récupère le contenu associé à la clé "tasks" dans le localStorage. La méthode getItem est utilisée pour récupérer la valeur de la clé "tasks". La valeur est stockée en tant que chaîne JSON, donc nous utilisons JSON.parse pour la convertir en un tableau JavaScript. Si la clé "tasks" n'existe pas ou si elle est vide, le || [] à la fin garantit que nous initialisons tasks avec un tableau vide.
          const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
          //Ici, nous ajoutons un nouvel objet à tasks contenant les informations de la nouvelle tâche. Les valeurs taskInput et selectedDifficulty proviennent des champs de saisie de l'utilisateur.
          tasks.push({ task: taskInput, difficulty: selectedDifficulty });
          //Une fois que nous avons mis à jour le tableau tasks, nous utilisons JSON.stringify pour convertir ce tableau en une chaîne JSON. Ensuite, nous utilisons localStorage.setItem pour enregistrer cette chaîne JSON dans le localStorage sous la clé "tasks". Cela permet de stocker les tâches de manière persistante dans le navigateur, même après la fermeture de la page
          localStorage.setItem("tasks", JSON.stringify(tasks));

        });
        // Charger les tâches depuis le localStorage
        const task_template = document.querySelector("#task-template");
        const difficultyColors = {
          Easy: "rgba(66, 255, 0, 0.56)",
          Medium: "rgba(240, 164, 16, 0.56)",
          Hard: "rgba(255, 0, 0, 0.56)"
        };
        //Cette ligne récupère les données enregistrées sous la clé "tasks" dans le localStorage.
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const todoList = document.getElementById("todo_task");
        savedTasks.forEach(savedTask => {
          if (!savedTask.deleted) {
            const clone_task = task_template.content.cloneNode(true);
            //met à jour le contenu de l'élément correspondant au nom de la tâche
            clone_task.querySelector("#task").textContent = savedTask.task;
            clone_task.querySelector("#difficulty").textContent = savedTask.difficulty;
            clone_task.querySelector("#difficulty").style.backgroundColor = difficultyColors[savedTask.difficulty];
            todoList.appendChild(clone_task);
            menu();
            removetask();
          }
        });
      });
}
export function removetask() {
  const remove = document.querySelectorAll(".delete");
  console.log(remove);
  remove.forEach(removeTask => {
    removeTask.addEventListener("click", () => {
      
      const taskElement = removeTask.closest("li");

      if (taskElement) {
        taskElement.remove();
        taskElement.classList.add("deleted");
        //Mettre à jour le localStorage pour garder en savegarde la suppression de la tâche
        updateLocalStorage();
        menu();
      }
    });
  });
}
export function updateLocalStorage() {
  const tasks = [];
  const taskElements = document.querySelectorAll(".task");
  taskElements.forEach(taskElement => {
    if (!taskElement.classList.contains("deleted")) { // Exclure les tâches supprimées
      const taskName = taskElement.querySelector("#task").textContent;
      const difficulty = taskElement.querySelector("#difficulty").textContent;
      tasks.push({ task: taskName, difficulty: difficulty });
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};