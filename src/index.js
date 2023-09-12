import "./style.sass";
import"./addtask.sass";
import "./darkmode.sass";
import {template_creation} from "./template_creation";
import { addtask,changetask,removetask, renametask } from "./addtask";
import { menu } from "./menu";
import { toggleDarkMode } from "./darkmode";
import { draganddrop} from "./drag-and-drop";
import { search } from "./search";
template_creation();
export function importfunction(){
    addtask();
    toggleDarkMode();
    menu();
    removetask();
    draganddrop();
    search();
    changetask();
    renametask();
}
importfunction();
