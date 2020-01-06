const defaultState = {
  notes: [],
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
            active: action.note,
            notes: root
        };
    } else if (action.type === 'SET_ACTIVE_NOTE') {
        let activeNote = findNote(state.notes, action.note.id);

        if (state.active && activeNote.id === state.active.id) {
            activeNote = null;
        }

        return {
            notes: state.notes,
            active: activeNote
        };
    } else if (action.type === 'UPDATE_NOTE') {
        updateNote(state.notes, action.note);
        return {
            notes: state.notes,
            active: action.note
        };

    } else {
        return state;
    }
};

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

function updateNote(notes, noteToUpdate) {
    for (let i = 0; i < notes.length; i++) {
        if (noteToUpdate.id === notes[i].id) {
            notes[i] = noteToUpdate;
        }

        updateNote(notes[i].children, noteToUpdate);
    }
}