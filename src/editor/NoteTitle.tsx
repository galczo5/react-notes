import * as React from "react";
import {Note} from "../model/Note";
import {useDispatch} from "react-redux";
import {updateNote} from "../actions";

export const NoteTitle = function (props: { activeNote: Note }) {
    const dispatch = useDispatch();
    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const note = new Note(
            props.activeNote.getId(),
            event.target.value,
            props.activeNote.getContent(),
            props.activeNote.getChildren()
        );

        dispatch(updateNote(note));
    };

    return (
        <div className="form-group mb-1">
            <input type="text"
                   className="form-control form-control-lg bg-dark border-dark text-white font-weight-bold"
                   value={props.activeNote.getTitle()}
                   onChange={onTitleChange}/>
        </div>
    );

};