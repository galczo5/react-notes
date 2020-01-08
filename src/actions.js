import {Note} from "./model/Note";

export const updateNote = note => ({
    type: 'UPDATE_NOTE',
    note
});

export const setActiveNote = note => ({
    type: 'SET_ACTIVE_NOTE',
    note
});

export const updateFilter = (filter) => ({
    type: 'SET_FILTER',
    filter: filter
});

export const addNote = (title) => ({
    type: 'ADD_NOTE',
    note: new Note({
        id: new Date().getTime(),
        title: title,
        content: `Content of the "${title}"...`,
        children: []
    })
});