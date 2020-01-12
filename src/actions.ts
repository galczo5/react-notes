import {Note} from "./model/Note";

export const updateNote = (note: Note) => ({
    type: 'UPDATE_NOTE',
    note
});

export const setActiveNote = (note: Note) => ({
    type: 'SET_ACTIVE_NOTE',
    note
});

export const updateFilter = (filter: string) => ({
    type: 'SET_FILTER',
    filter: filter
});

export const closeActive = () => ({
    type: 'CLOSE_ACTIVE'
});


export const addNote = (title: string) => ({
    type: 'ADD_NOTE',
    note: new Note(
        new Date().getTime(),
        title,
        `Content of the "${title}"...`,
        []
    )
});