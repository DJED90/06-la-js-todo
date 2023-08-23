import "./style.sass";
import"./addtask.sass";
import "./darkmode.sass";
import {template_creation} from "./template_creation";
import { addtask,removetask } from "./addtask";
import { menu } from "./menu";
import { toggleDarkMode } from "./darkmode";
template_creation();
addtask();
toggleDarkMode();
menu();
removetask();


