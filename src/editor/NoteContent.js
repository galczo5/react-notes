import * as React from "react";
import {Note} from "../model/Note";
import {useDispatch} from "react-redux";
import {updateNote} from "../actions";

export const NoteContent = function ({ activeNote }) {
    const dispatch = useDispatch();
    const contentChange = (event) => {
        const note = new Note({
            ...activeNote,
            content: event.target.value
        });
        dispatch(updateNote(note));
    };

    return (
        <div className="form-group mb-0">
                    <textarea className="form-control pl-3 bg-dark border-dark text-white"
                              style={{ height: '60vh'}}
                              value={activeNote.content}
                              onChange={contentChange}/>
        </div>
    );

};