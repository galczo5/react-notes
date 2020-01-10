import * as React from "react";
import {Tree} from "./Tree";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../actions";

export const TreeNode = function ({ note, activeNote }) {

    const dispatch = useDispatch();
    const active = activeNote && note.id === activeNote.id;
    const activeClass = active ? 'text-white' : '';

    const setActive = () => {
        dispatch(setActiveNote(note));
    };

    return (
        <li className="list-group-item border-0 px-0 py-0">
            <div className={"d-flex justify-content-between align-items-center py-2 " + activeClass}
                 onClick={setActive}>
                { note.title }
            </div>
            <div className="pl-3">
                <Tree notes={ note.children }/>
            </div>
        </li>
    );
};