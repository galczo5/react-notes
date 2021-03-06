import {Note} from "./model/Note";

export type ActiveNote = Note | null;
export interface Notes {
    notes: Array<Note>;
    openedNotes: Array<Note>;
    filteredNotes: Array<Note>,
    filter: string,
    path: Array<Note>,
    active: ActiveNote
}

const defaultState: Notes = {
    notes: [],
    openedNotes: [],
    filteredNotes: [],
    filter: '',
    path: [],
    active: null
};

export const notes = (state: Notes = defaultState, action: any) => {
    if (action.type === 'ADD_NOTE') {
        let root = [...state.notes];
        if (state.active) {
            state.active.setChildren([
                ...state.active.getChildren(),
                action.note]
            );
        } else {
            root = [...state.notes, action.note];
        }

        let openedNotes = [ ...state.openedNotes, action.note ];

        return {
            ...state,
            active: action.note,
            openedNotes: openedNotes,
            notes: root,
            path: getPath(root, action.note.id)
        };
    } else if (action.type === 'SET_ACTIVE_NOTE') {
        let activeNote = findNote(state.notes, action.note.id);
        let openedNotes = state.openedNotes;

        if (state.active && activeNote && activeNote.getId() === state.active.getId()) {
            activeNote = null;
        } else if (activeNote && openedNotes.indexOf(activeNote) === -1) {
            openedNotes = [ ...openedNotes, activeNote ];
        }

        return {
            ...state,
            active: activeNote,
            openedNotes: openedNotes,
            path: activeNote ? getPath(state.notes, activeNote.getId()) : []
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
        const filteredNotes = flat.filter(n => n.getTitle().indexOf(filter) !== -1 || n.getContent().indexOf(filter) !== -1)
            .map(n => new Note(
                n.getId(),
                n.getTitle(),
                n.getContent(),
                []
            ));

        return {
            ...state,
            filter: filter,
            filteredNotes: filteredNotes
        };
    } else if (action.type === 'CLOSE_ACTIVE') {
        let openedTabs = state.openedNotes.filter(n => n.getId() !== state.active?.getId());
        return {
            ...state,
            active: openedTabs.length ? openedTabs[0] : null,
            openedNotes: openedTabs
        };
    } else {
        return state;
    }
};

function flattenNotes(notes: Array<Note>): Array<Note> {
    let result = [...notes];
    for (let note of notes) {
        const flat = flattenNotes(note.getChildren());
        result = [...result, ...flat];
    }

    return result;
}

function findNote(notes: Array<Note>, id: number): Note | null {

    for (let note of notes) {
        if (note.getId() === id) {
            return note;
        }

        const childNote = findNote(note.getChildren(), id);
        if (childNote) {
            return childNote;
        }
    }

    return null;
}

function getPath(notes: Array<Note>, id: number): Array<Note> {

    for (let note of notes) {
        if (note.getId() === id) {
            return [note];
        }

        const childNote = getPath(note.getChildren(), id);
        if (childNote.length !== 0) {
            return [note, ...childNote];
        }
    }

    return [];
}

function updateNote(notes: Array<Note>, noteToUpdate: Note): void {
    for (let i = 0; i < notes.length; i++) {
        if (noteToUpdate.getId() === notes[i].getId()) {
            notes[i] = noteToUpdate;
        }

        updateNote(notes[i].getChildren(), noteToUpdate);
    }
}