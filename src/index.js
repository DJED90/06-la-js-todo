import "./style.sass";
import"./addtask.sass";
import "./darkmode.sass";
import {template_creation} from "./template_creation";
import { addtask } from "./addtask";
import { menu } from "./menu";
import { toggleDarkMode } from "./darkmode";
template_creation();
menu();
addtask();
toggleDarkMode();

