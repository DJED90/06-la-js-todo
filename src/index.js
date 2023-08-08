import "./style.sass";
export function template_creation(){
    const container = document.querySelector("#app");
    console.log(container);


// On récupère le template souhaité
const template = document.querySelector("#base-template");
const task_template = document.querySelector("#task-template");


// On clone le template 
const clone = document.importNode(template.content,true);
const clone_task = document.importNode(task_template.content,true)

//On va chercher les balises de la div "entete"//
const entete = clone.querySelector("#entete");
const ul =  clone.querySelector("#todo_task");
const done = clone.querySelector("#done_task");
const inprogress = clone.querySelector("#in-progress_task");


//On inject le contenu souhaité
container.appendChild(clone);
ul.appendChild(clone_task);

// Clonez le modèle de tâche pour les tâches "Done" et ajoutez-le à la liste "Done"
const clone_task_done = document.importNode(task_template.content, true);
done.appendChild(clone_task_done);
// Clonez le modèle de tâche pour les tâches "Done" et ajoutez-le à la liste "Done"
const clone_task_progress = document.importNode(task_template.content, true);
inprogress.appendChild(clone_task_progress);

}
template_creation();