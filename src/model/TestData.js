import {Note} from "./Note";

export const notes = [
    new Note({
        id: 1,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum',
        children: [
            new Note({
                id: 2,
                title: 'Lorem ipsum',
                content: 'Lorem ipsum'
            }),
            new Note({
                id: 3,
                title: 'Lorem ipsum',
                content: 'Lorem ipsum'
            }),
            new Note({
                id: 4,
                title: 'Lorem ipsum',
                content: 'Lorem ipsum',
                children: [
                    new Note({
                        id: 5,
                        title: 'Lorem ipsum',
                        content: 'Lorem ipsum'
                    })
                ]
            })
        ]
    }),
    new Note({
        id: 6,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum',
        children: [
            new Note({
                id: 7,
                title: 'Lorem ipsum',
                content: 'Lorem ipsum'
            })
        ]
    })
];