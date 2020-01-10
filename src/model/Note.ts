export class Note {

    constructor(
        private id: number,
        private title: string,
        private content: string,
        private children: Array<Note> = []
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.children = children;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    getChildren(): Array<Note> {
        return this.children;
    }

    setChildren(children: Array<Note>): void {
        this.children = children;
    }

}