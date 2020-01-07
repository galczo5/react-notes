import {Note} from "./model/Note";

const defaultState = {
    notes: [],
    filter: '',
    filteredNotes: [],
    path: [],
    active: null
};

export const notes = (state = defaultState, action) => {
    if (action.type === 'ADD_NOTE') {
        let root = [...state.notes];
        if (state.active) {
            state.active.children = [...state.active.children, action.note];
        } else {
            root = [...state.notes, action.note];
        }

        return {
            ...state,
            active: action.note,
            notes: root,
            path: getPath(root, action.note.id)
        };
    } else if (action.type === 'SET_ACTIVE_NOTE') {
        let activeNote = findNote(state.notes, action.note.id);

        if (state.active && activeNote.id === state.active.id) {
            activeNote = null;
        }

        return {
            ...state,
            active: activeNote,
            path: activeNote ? getPath(state.notes, activeNote.id) : []
        };
    } else if (action.type === 'UPDATE_NOTE') {
        updateNote(state.notes, action.note);
        return {
            ...state,
            active: action.note
        };
    } else if (action.type === 'SET_FILTER') {
        const flat = flattenNotes(state.notes);
        const filter = action.filter;
        const filteredNotes = flat.filter(n => n.title.indexOf(filter) !== -1 || n.content.indexOf(filter) !== -1)
            .map(n => new Note({
                ...n,
                children: []
            }));

        return {
            ...state,
            filter: filter,
            filteredNotes: filteredNotes
        };
    } else {
        return state;
    }
};

function flattenNotes(notes) {
    let result = [...notes];
    for (let note of notes) {
        const flat = flattenNotes(note.children);
        result = [...result, ...flat];
    }

    return result;
}

function findNote(notes, id) {

    for (let note of notes) {
        if (note.id === id) {
            return note;
        }

        const childNote = findNote(note.children, id);
        if (childNote) {
            return childNote;
        }
    }

    return null;
}

function getPath(notes, id) {

    for (let note of notes) {
        if (note.id === id) {
            return [note];
        }

        const childNote = getPath(note.children, id);
        if (childNote.length !== 0) {
            return [note, ...childNote];
        }
    }

    return [];
}

function updateNote(notes, noteToUpdate) {
    for (let i = 0; i < notes.length; i++) {
        if (noteToUpdate.id === notes[i].id) {
            notes[i] = noteToUpdate;
        }

        updateNote(notes[i].children, noteToUpdate);
    }
}