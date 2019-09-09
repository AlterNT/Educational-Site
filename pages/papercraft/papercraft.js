import { FileManagementSystem } from "../../js/fms.js";

export class PaperCraft extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        let css = `:host {
            all: initial;
            font-family: inherit;
        }
        
        .sites {
            height: 30rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
        
        .sites h1 {
            padding: 2rem;
            width: fit-content;
            box-shadow: 1px 1px 0 0 grey;
            background-color: #aaabb8;
        }
        
        .sites table {
            width: 80%;
            color: white;
        }
        
        .sites table tr td,th {
            background-color: #464866;
        }
        
        .sites table tr th:nth-child(2) {
            width: 10rem;
        }
        
        
        .sites table tr td a {
            display: flex;
            justify-content: center;
        }
        
        .sites table tr td a img {
            margin: 1rem;
            height: 5rem;
            max-width: 10rem;
        }`;
        let html = `<div class="sites">
        <h1>Sites</h1>
        <table>
            <tr>
                <th>Link:</th>
                <th>Site:</th>
                <th>Description:</th>
            </tr>
            <tr>
                <td><a href="https://web.archive.org/web/20180802051052/https://global.yamaha-motor.com/showroom/papercraft/"><img src="https://nathanphillis.github.io/Educational-Site/src/images/sites/yamaha.png" draggable="false"></a></td>
                <td>Yamaha Paper Models</td>
                <td>
                    This website Primarily focuses on papercraft models of yamaha bikes. 
                    They offer a wide range of bikes to choose from from easy to hard difficulties.
                </td>
            </tr>
            <tr>
                <td><a href="https://creativepark.canon/en/categories/CAT-ST01-0071/top.html"><img src="https://nathanphillis.github.io/Educational-Site/src/images/sites/canon.png" draggable="false"></a></td>
                <td>Canon Paper Models</td>
                <td>
                    This website has a wide variety of clean, high quality designs to choose from.
                    Their models can range from easy to medium level difficulty.
                </td>
            </tr>
            <tr>
                <td><a href="http://www.papercraftmuseum.com/"><img src="https://nathanphillis.github.io/Educational-Site/src/images/sites/papercraftmuseum.png" draggable="false"></a></td>
                <td>Papercraft Museum</td>
                <td>
                    This website is a catalog of papercraft templates made by the community.
                    Hence the quality can vary at times. Despite this, it also provides one 
                    of the largest ranges of papercraft designs to choose from.
                </td>
            </tr>
            <tr>
                <td><a href="http://paper-replika.com/"><img src="https://nathanphillis.github.io/Educational-Site/src/images/sites/paperreplika.png" draggable="false"></a></td>
                <td>Paper Replica</td>
                <td>
                    This website is similar in format to papercraft museum and hence comes with
                    the same pros and cons.
                </td>
            </tr>
        </table>
    </div>`;
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<style>" + css + "</style>" + html;
    }
}