export function template_creation(){
    const container = document.querySelector("#app");


// On récupère le template souhaité
const template = document.querySelector("#base-template");
const task_template = document.querySelector("#task-template");
const addtask_template = document.querySelector("#task-create");


// On clone le template 
const clone = document.importNode(template.content,true);
const clone_task = document.importNode(task_template.content,true);
const clone_addtask = document.importNode(addtask_template.content,true);


//On va chercher les balise que l'on souhaite//
const ul =  clone.querySelector("#todo_task");
const done = clone.querySelector("#done_task");
const inprogress = clone.querySelector("#in-progress_task");



//On inject le contenu souhaité
container.appendChild(clone);
container.appendChild(clone_addtask);

}