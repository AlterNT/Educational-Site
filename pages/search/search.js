import { FileManagementSystem } from "../../js/fms.js";

export class PaperSearch extends HTMLElement {
    
    query = "";
    
    constructor() {
        super();
    }

    init(query) {
        this.query = query;
        let css = `:host {
            all: initial;
            font-family: inherit;
        }`;
        let html = `<h1 id="title">No Search Result</h1>`;
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
        shadow.getElementById("title").innerText = "Search Results for: " + query;
    }

}