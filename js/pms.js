export class PageManagementSystem {

    page;

    constructor(initialpage) {
        var node = document.createElement(initialpage);
        this.page = node;
        document.body.appendChild(node);
        node.init();
    }

    setPage(pageID) {
        document.body.removeChild(this.page);
        let page = document.createElement(pageID);
        page.init();
        this.page = page;
        document.body.appendChild(this.page);
    }

    setPage(pageID, args) {
        document.body.removeChild(this.page);
        let page = document.createElement(pageID);
        page.init(args);
        this.page = page;
        document.body.appendChild(this.page);
    }

    getPage() {
        return this.page;
    }
}