import * as React from "react";
import {Note} from "../model/Note";
import {useDispatch} from "react-redux";
import {updateNote} from "../actions";

export const NoteTitle = function ({ activeNote }) {
    const dispatch = useDispatch();
    const onTitleChange = (event) => {
        const note = new Note({
            ...activeNote,
            title: event.target.value
        });
        dispatch(updateNote(note));
    };

    return (
        <div className="form-group mb-1">
            <input type="text"
                   className="form-control form-control-lg bg-dark border-dark text-white font-weight-bold"
                   value={activeNote.title}
                   onChange={onTitleChange}/>
        </div>
    );

};