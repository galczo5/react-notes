import * as React from "react";
import {Note} from "../model/Note";
import {useDispatch} from "react-redux";
import {updateNote} from "../actions";

export const NoteContent = function (props: { activeNote: Note }) {
    const dispatch = useDispatch();
    const contentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const note = new Note(
            props.activeNote.getId(),
            props.activeNote.getTitle(),
            event.target.value,
            props.activeNote.getChildren()
        );
        dispatch(updateNote(note));
    };

    return (
        <div className="form-group mb-0">
                    <textarea className="form-control pl-3 bg-dark border-dark text-white"
                              style={{ height: '60vh'}}
                              value={props.activeNote.getContent()}
                              onChange={contentChange}/>
        </div>
    );

};