import {connect} from "react-redux";
import {Note} from "../model/Note";
import {CreateNoteForm} from "./CreateNoteForm";

const dispatchToProps = {
    addNote: (title) => ({
        type: 'ADD_NOTE',
        note: new Note({
            id: new Date().getTime(),
            title: title,
            content: '',
            children: []
        })
    })
};

const stateToProps = state => ({});

export const CreateNoteFormContainer = connect(stateToProps, dispatchToProps)(CreateNoteForm);