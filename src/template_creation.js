export function template_creation(){
    const container = document.querySelector("#app");


// On récupère le template souhaité
const template = document.querySelector("#base-template");
const task_template = document.querySelector("#task-template");
const addtask_template = document.querySelector("#task-create");


// On clone le template 
const clone = document.importNode(template.content,true);
const clone_addtask = document.importNode(addtask_template.content,true);

//On inject le contenu souhaité
container.appendChild(clone);
container.appendChild(clone_addtask);

}