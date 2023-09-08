import "./style.sass";
import"./addtask.sass";
import "./darkmode.sass";
import {template_creation} from "./template_creation";
import { addtask,changetask,removetask } from "./addtask";
import { menu } from "./menu";
import { toggleDarkMode } from "./darkmode";
import { draganddrop} from "./drag-and-drop";
import { search } from "./search";
export function importfunction(){
    template_creation();
    addtask();
    toggleDarkMode();
    menu();
    removetask();
    draganddrop();
    search();
    changetask();
}
importfunction();
