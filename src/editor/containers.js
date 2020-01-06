import {connect} from "react-redux";
import {NoteTitle} from "./NoteTitle";
import {NotePath} from "./NotePath";
import {NoteContent} from "./NoteContent";

const stateToProps = (state) => {
    return  {
        activeNote: state.notes.active
    };
};

const dispatchToProps = {
    updateNote: note => ({
        type: 'UPDATE_NOTE',
        note
    })
};

export const NoteTitleContainer = connect(stateToProps, dispatchToProps)(NoteTitle);
export const NotePathContainer = connect(stateToProps, {})(NotePath);
export const NoteContentContainer = connect(stateToProps, dispatchToProps)(NoteContent);