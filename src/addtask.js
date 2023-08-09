export function addtask() {
    document.addEventListener("DOMContentLoaded", function () {
        const overlay = document.createElement("div");
        overlay.id = "overlay";
        overlay.className = "overlay";
        document.body.appendChild(overlay);
      
        const addTaskIcon = document.getElementById("addtask");
        const addTaskForm = document.getElementById("addTaskForm");
        const taskForm = document.getElementById("taskForm");
      
        addTaskIcon.addEventListener("click", () => {
          overlay.style.display = "block";
          addTaskForm.style.display = "block";
        });
      
        overlay.addEventListener("click", () => {
          overlay.style.display = "none";
          addTaskForm.style.display = "none";
        });
      
        taskForm.addEventListener("submit", (event) => {
          event.preventDefault();
      
          const taskName = document.getElementById("taskName").value;
          const difficulty = document.getElementById("difficulty").value;
      
          // Ajoutez ici la logique pour ajouter la tâche à votre liste
          // Créez un nouvel élément li en utilisant les données du formulaire et ajoutez-le à la liste appropriée
          // Puis réinitialisez le formulaire et cachez le formulaire
          // Par exemple :
          // const newTaskElement = document.createElement("li");
          // newTaskElement.innerHTML = `...`; // Utilisez les données du formulaire pour personnaliser le contenu
          // document.getElementById("todo_task").appendChild(newTaskElement);
      
          taskForm.reset();
          overlay.style.display = "none";
          addTaskForm.style.display = "none";
        });
      });
}