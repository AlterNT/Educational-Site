import { FileManagementSystem } from "../../js/fms.js";

export class PaperHomePage extends HTMLElement {
    
    constructor() {
        super();
    }

    init() {
        //replace with async in futre
        let css = `:host {
            all: initial;
            font-family: inherit;
        }
        
        .title {
            margin-top: 2rem;
            height: 30rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
        
        .title h1 {
            padding: 2rem;
            width: fit-content;
            box-shadow: 1px 1px 0 0 grey;
            background-color: #d5d6e3;
        }
        
        .title video {
            position: absolute;
            z-index: -2;
            height: 100%;
            object-fit: cover;
        }
        
        .title p {
            padding: 1rem;
            margin: 2rem;
            margin-top: auto;
            width: fit-content;
            box-shadow: 1px 1px 0 0 grey;
            background-color: #d5d6e3;
            max-width: 30rem;
        }
        
        .showcase {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #29648a;
            box-shadow: 1px 0 0 0 grey;
        }
        
        .showcase h2 {
            padding: 1rem;
            margin: 2rem;
            width: fit-content;
            box-shadow: 1px 1px 0 0 gray;
            background-color: #d5d6e3;
        }
        
        .loop {
            display: flex;
            height: 20rem;
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-bottom: 4rem;
        }
        
        .loop .back {
            display: flex;
            margin: 1rem;
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            background-color: #2e9cca;
            align-items: center;
            justify-content: center;
            box-shadow: 1px 1px 0 0 gray;
            color: white;
            user-select: none;
        }
        
        .loop .back:hover {
            background-color: #a692ca;
            transition: all 0.2s;
        }
        
        .loop .back:active {
            background-color: #5680e9;
            transition-duration: 0s;
        }
        
        .loop img {
            width: 40rem;
            height: 20rem;
            border: dashed #2e9cca;
            box-sizing: border-box;
            object-fit: contain;
            background-color: #464866;
            box-shadow: inset 1px 1px 0px 0px grey;
        }
        
        .loop .forward {
            display: flex;
            margin: 1rem;
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            background-color: #2e9cca;
            align-items: center;
            justify-content: center;
            box-shadow: 1px 1px 0 0 gray;
            color: white;
            user-select: none;
        }
        
        .loop .forward:hover {
            background-color: #a692ca;
            transition: all 0.2s;
        }
        
        .loop .forward:active {
            background-color: #5680e9;
            transition-duration: 0s;
        }
        
        .latest {
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 30rem;
            background-color: #464866;
        }
        
        .latest h2 {
            padding: 1rem;
            margin: 2rem;
            width: fit-content;
            box-shadow: 1px 1px 0 0 gray;
            background-color: #d5d6e3;
        }
        
        .latest .gallery {
            display: flex;
        }
        
        .latest .gallery div a {
            display: flex;
            flex-direction: column;
            margin: 1rem;
            width: 15rem;
            padding-bottom: 0.5rem;
            background-color: #aaabb8;
            align-items: center;
            user-select: none;
            text-decoration: none;
            color: black;
        }
        
        .latest .gallery div img {
            width: 100%;
            padding-bottom: 0.5rem;
            user-select: none;
        }`;
        let html = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="title">
            <video src="https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/videos/title.mp4" width="100%" height="80%" autoplay loop></video>
            <h1>Welcome!</h1>
            <p>
                We invite you to browse the only place on the web where you can find an large amount of resources related to the hobby of papercraft.
                We have tips and tutorials to help you learn, we have forums to discuss things related to the hobby and we also have a wide
                variety of links to other websites where you can get your hands on your own papercraft templates.
            </p>
        </div>
        
        <div class="showcase">
            <h2>Showcase</h2>
        
            <div class="loop">
                <div class="back" id="back"><i class="material-icons">chevron_left</i></div>
                <img id="loopImg">
                <div class="forward" id="forward"><i class="material-icons">chevron_right</i></div>
            </div>
        
        </div>
        
        <div class="latest">
            <h2>Latest Designs</h2>
            <div class="gallery">
                <div>
                    <a href="http://axmpaperspacescalemodels.com/index.php/falcon-9/product/Falcon%20Heavy%20Demo%20Flight/?">
                        <img src="https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/showcase/s1.jpg" draggable="false">
                        Falcon Heavy
                    </a>
                </div>
                <div>
                    <a href="http://paper-replika.com/index.php%3Foption=com_content&id=8536:ford-mustang-gt-death-race-paper-model&Itemid=206374">
                        <img src="https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/showcase/s2.jpg" draggable="false">
                        Death Race Ford Mustang
                    </a>
                </div>
                <div>
                    <a href="https://creativepark.canon/en/contents/CNT-0024525/index.html">
                        <img src="https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/showcase/s3.jpg" draggable="false">
                        Curiosity Rover
                    </a>
                </div>
            </div>
            
        </div>`;
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;

        shadow.getElementById("back").addEventListener("click", this.back.bind(this));
        shadow.getElementById("forward").addEventListener("click", this.forward.bind(this));
        shadow.getElementById("loopImg").setAttribute("src", this.images[this.pos]);
    }

    //loop
    pos = 0;
    images = [
        "https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/loop/1.jpg",
        "https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/loop/2.jpg",
        "https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/loop/3.jpg",
        "https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/loop/4.jpg",
        "https://github.com/AlterNT/Year-12-Papercraft-Site/blob/master/src/images/loop/5.jpg",
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
