import "./style.sass";
function template_creation(){
    const container = document.querySelector("#app");


// On récupère le template souhaité
const template = document.querySelector("#base-template");
console.log(template);

// On clone le template 
const clone = document.importNode(template.content,true);

//On va chercher les balises de la div "entete"//
const entete = clone.querySelector("#entete");


//On inject le contenu souhaité
container.appendChild(clone);
}
template_creation();