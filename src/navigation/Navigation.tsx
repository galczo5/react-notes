import * as React from "react";
import {Tree} from "./Tree";
import {useSelector} from "react-redux";
import {CreateNoteForm} from "./CreateNoteForm";
import {ActiveNote, Notes} from "../reducers";
import {Note} from "../model/Note";

export const Navigation = function () {

    const filter = useSelector<Notes, string>(state => state.filter);
    const filteredNotes = useSelector<Notes, Array<Note>>(state => state.filteredNotes);
    const notes = useSelector<Notes, Array<Note>>(state => state.notes);
    const activeNote = useSelector<Notes, ActiveNote>(state => state.active);

    return (
        <div>
            <CreateNoteForm/>
            <Tree notes={filter ? filteredNotes : notes} activeNote={activeNote}/>
        </div>
    );
};

