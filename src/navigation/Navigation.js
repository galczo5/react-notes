import * as React from "react";
import {Tree} from "./Tree";
import {useSelector} from "react-redux";
import {CreateNoteForm} from "./CreateNoteForm";

export const Navigation = function () {

    const filter = useSelector(state => state.notes.filter);
    const filteredNotes = useSelector(state => state.notes.filteredNotes);
    const notes = useSelector(state => state.notes.notes);
    const activeNote = useSelector(state => state.notes.active);

    return (
        <div>
            <CreateNoteForm/>
            <Tree notes={filter ? filteredNotes : notes} activeNote={activeNote}/>
        </div>
    );
};

