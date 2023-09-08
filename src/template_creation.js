export function template_creation(){
    const container = document.querySelector("#app");

// On récupère le template souhaité
const template = document.querySelector("#base-template");
const addtask_template = document.querySelector("#task-create");
const changetask_template = document.querySelector("#task-change");

// On clone le template 
const clone_changetask = document.importNode(changetask_template.content,true);
const clone = document.importNode(template.content,true);
const clone_addtask = document.importNode(addtask_template.content,true);

//On inject le contenu souhaité
container.appendChild(clone);
container.appendChild(clone_addtask);
container.appendChild(clone_changetask);

}