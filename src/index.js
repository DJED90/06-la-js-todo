import "./style.sass";
function template_creation(){
    const container = document.querySelector("#app");
    console.log(container);
    
    console.log(ul);


// On récupère le template souhaité
const template = document.querySelector("#base-template");
const task_template = document.querySelector("#task-template");


// On clone le template 
const clone = document.importNode(template.content,true);
const clone_task = document.importNode(task_template.content,true)

//On va chercher les balises de la div "entete"//
const entete = clone.querySelector("#entete");
const ul =  clone.querySelector("#todo_task");


//On inject le contenu souhaité
container.appendChild(clone);
ul.appendChild(clone_task);
}
template_creation();