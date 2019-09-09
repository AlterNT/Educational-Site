import { FileManagementSystem } from "../../js/fms.js";

export class PaperHomePage extends HTMLElement {
    
    constructor() {
        super();
    }

    init() {
        //replace with async in futre
        let css = FileManagementSystem.loadFile("https://nathanphillis.github.io/Educational-Site/pages/homepage/homepage.css");
        let html = FileManagementSystem.loadFile("https://nathanphillis.github.io/Educational-Site//pages/homepage/homepage.html")
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;

        shadow.getElementById("back").addEventListener("click", this.back.bind(this));
        shadow.getElementById("forward").addEventListener("click", this.forward.bind(this));
        shadow.getElementById("loopImg").setAttribute("src", this.images[this.pos]);
    }

    //loop
    pos = 0;
    images = [
        "https://nathanphillis.github.io/Educational-Site//src/images/loop/1.jpg",
        "https://nathanphillis.github.io/Educational-Site//src/images/loop/2.jpg",
        "https://nathanphillis.github.io/Educational-Site//src/images/loop/3.jpg",
        "https://nathanphillis.github.io/Educational-Site//src/images/loop/4.jpg",
        "https://nathanphillis.github.io/Educational-Site//src/images/loop/5.jpg",
    ]

    back() {

        if (this.pos == 0) {
            this.pos = this.images.length - 1;
        } else {
            this.pos--;
        }
        this.shadowRoot.getElementById("loopImg").setAttribute("src", this.images[this.pos]);
    }

    forward() {

        if (this.pos == this.images.length - 1) {
            this.pos = 0;
        } else {
            this.pos++;
        }
        this.shadowRoot.getElementById("loopImg").setAttribute("src", this.images[this.pos]);
    }

}