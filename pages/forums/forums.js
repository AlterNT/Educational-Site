import { FileManagementSystem } from "../../js/fms.js";

export class PaperForums extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = FileManagementSystem.loadFile("../../pages/forums/forums.css");
        let html = FileManagementSystem.loadFile("../../pages/forums/forums.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}