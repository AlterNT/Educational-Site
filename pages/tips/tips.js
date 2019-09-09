import { FileManagementSystem } from "../../js/fms.js";

export class PaperTips extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = FileManagementSystem.loadFile("../../pages/tips/tips.css");
        let html = FileManagementSystem.loadFile("../../pages/tips/tips.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}