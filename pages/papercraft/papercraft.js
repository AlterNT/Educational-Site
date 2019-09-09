import { FileManagementSystem } from "../../js/fms.js";

export class PaperCraft extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = FileManagementSystem.loadFile("../../pages/papercraft/papercraft.css");
        let html = FileManagementSystem.loadFile("../../pages/papercraft/papercraft.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}