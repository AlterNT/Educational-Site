import { PaperHomePage } from "../pages/homepage/homepage.js";
import { PaperTips } from "../pages/tips/tips.js";
import { PaperTutorials } from "../pages/tutorials/tutorials.js";
import { PaperCraft } from "../pages/papercraft/papercraft.js";
import { PaperForums } from "../pages/forums/forums.js";
import { PaperAbout } from "../pages/about/about.js";
import { PaperSearch } from "../pages/search/search.js";
import { PageManagementSystem } from "./pms.js";

//Define Custom Elements
window.customElements.define("paper-homepage", PaperHomePage);
window.customElements.define("paper-tips", PaperTips);
window.customElements.define("paper-tutorials", PaperTutorials);
window.customElements.define("paper-craft", PaperCraft);
window.customElements.define("paper-forums", PaperForums);
window.customElements.define("paper-about", PaperAbout);
window.customElements.define("paper-search", PaperSearch);

//Initalise Page
window.pms = new PageManagementSystem("paper-homepage");

//Active Tab
window.tab = document.getElementById("Home");

function setTab(e) {
    if (e != null) {
        if (window.tab != null) {
            window.tab.classList.remove("selected");
        }
        window.tab = e.target;
        e.target.classList.add("selected");
    } else {
        window.tab.classList.remove("selected");
        window.tab = null;
    }
}

window.setTab = setTab;


window.onSearch = function(e) {
    e.preventDefault();
    pms.setPage("paper-search", document.getElementById("query").value);
    let search = pms.getPage();
}

//Removes Ugly Blue Outline
document.body.addEventListener('keyup', function(e) {
    if (e.which === 9) /* tab */ {
      document.body.classList.remove('no-focus-outline');
    }
});
document.body.addEventListener('click', function(e) {
    document.body.classList.add('no-focus-outline');
})