export class Note {

    id = 0;
    title = '';
    content = '';
    path = [];
    children = [];

    constructor({
        id,
        title,
        content,
        path = [],
        children = []
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.path = path;
        this.children = children;
    }

}