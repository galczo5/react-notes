import {connect} from "react-redux";
import {NoteTitle} from "./NoteTitle";
import {NotePath} from "./NotePath";
import {NoteContent} from "./NoteContent";
import {NoteEditor} from "./NoteEditor";

const stateToProps = (state) => {
    return  {
        activeNote: state.notes.active,
        path: state.notes.path
    };
};

const dispatchToProps = {
    updateNote: note => ({
        type: 'UPDATE_NOTE',
        note
    }),
    setActiveNote: note => ({
        type: 'SET_ACTIVE_NOTE',
        note
    }),
};

export const NoteTitleContainer = connect(stateToProps, dispatchToProps)(NoteTitle);
export const NotePathContainer = connect(stateToProps, dispatchToProps)(NotePath);
export const NoteContentContainer = connect(stateToProps, dispatchToProps)(NoteContent);
export const NoteEditorContainer = connect(stateToProps, dispatchToProps)(NoteEditor);