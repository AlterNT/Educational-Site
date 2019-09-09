import { FileManagementSystem } from "../../js/fms.js";

export class PaperTutorials extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css =  `:host {
            all: initial;
            font-family: inherit;
        }
        
        .tutorials {
            margin-top: 2rem;
            height: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
        
        .tutorials h1 {
            padding: 2rem;
            width: fit-content;
            box-shadow: 1px 1px 0 0 grey;
            background-color: #aaabb8;
        }
        
        .tutorials div {
            margin-top: 2rem;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: wrap;
            width: 100%;
        }`;
        let html = `<div class="tutorials">
        <h1>Tutorials</h1>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/S-fimwmi7S4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fF0JA7WXj1w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XjCV8KSiw_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zn567UfICn4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eZlUqqj-n6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-g9_BQtB1h8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>`;
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}