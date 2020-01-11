import * as React from "react";
import {Tree} from "./Tree";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../actions";
import {ActiveNote} from "../reducers";
import {Note} from "../model/Note";

export const TreeNode = function (props: { note: Note, activeNote: ActiveNote }) {

    const dispatch = useDispatch();
    const active = props.activeNote && props.note.getId() === props.activeNote.getId();
    const activeClass = active ? 'text-white' : '';

    const setActive = () => {
        dispatch(setActiveNote(props.note));
    };

    return (
        <li className="list-group-item border-0 px-0 py-0">
            <div className={"d-flex justify-content-between align-items-center py-2 " + activeClass}
                 onClick={setActive}>
                { props.note.getTitle() }
            </div>
            <div className="pl-3">
                <Tree notes={props.note.getChildren()} activeNote={props.activeNote}/>
            </div>
        </li>
    );
};