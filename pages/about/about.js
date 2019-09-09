import { FileManagementSystem } from "../../js/fms.js";

export class PaperAbout extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = FileManagementSystem.loadFile("../../pages/about/about.css");
        let html = FileManagementSystem.loadFile("../../pages/about/about.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}