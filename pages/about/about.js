import { FileManagementSystem } from "../../js/fms.js";

export class PaperAbout extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = `:host {
            all: initial;
            font-family: inherit;
        }
        
        .about {
            margin-top: 2rem;
            height: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
        
        .about h1 {
            padding: 2rem;
            width: fit-content;
            box-shadow: 1px 1px 0 0 grey;
            background-color: #aaabb8;
        }
        
        .about p {
            padding: 2rem;
            width: 80%;
            box-shadow: 1px 1px 0 0 grey;
            background-color: #aaabb8;
        }`;
        let html =  `<div class="about">
        <h1>About</h1>
        <p>
            This website was created to serve the community of people who are interested in the hobby of papercraft,
            and provide a single, unified location to find and learn more about the hobby. This is something that the
            hobby seems to lack, due to how spread out all the models are, an how scarce it is to find a website that is
            up-to-date with the latest web design and usability trends.
            <br>
            <br>
            Created By Nathan Phillis in 2019 for Applied Information Technology.
        </p>
        <img src="./src/images/meme.jpg">
    </div>`;
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}
