import { FileManagementSystem } from "../../js/fms.js";

export class PaperTutorials extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = FileManagementSystem.loadFile("../../pages/tutorials/tutorials.css");
        let html = FileManagementSystem.loadFile("../../pages/tutorials/tutorials.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}