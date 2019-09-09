export class FileManagementSystem {
    static loadFile(path) {
        let req = new XMLHttpRequest();
        req.open("GET", path, false);
        req.send();
        return req.responseText;
    }
}