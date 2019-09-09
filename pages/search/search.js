import { FileManagementSystem } from "../../js/fms.js";

export class PaperSearch extends HTMLElement {
    
    query = "";
    
    constructor() {
        super();
    }

    init(query) {
        this.query = query;
        let css = FileManagementSystem.loadFile("../../pages/search/search.css");
        let html = FileManagementSystem.loadFile("../../pages/search/search.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
        shadow.getElementById("title").innerText = "Search Results for: " + query;
    }

}