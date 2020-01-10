import * as React from "react";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../actions";
import {Note} from "../model/Note";

export const NotePath = function (props: { path: Array<Note> }) {
    const dispatch = useDispatch();

    const items = props.path.map(p => (
        <li key={p.getId()} className="breadcrumb-item">
            <span className="cursor-pointer"
                  onClick={() => dispatch(setActiveNote(p))}>
                { p.getTitle() }
            </span>
        </li>
    ));

    return (
        <ol className="breadcrumb py-0 mb-1">
            { items }
        </ol>
    );
};