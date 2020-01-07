export class Note {

    id = 0;
    title = '';
    content = '';
    children = [];

    constructor({
        id,
        title,
        content,
        children = []
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.children = children;
    }

}