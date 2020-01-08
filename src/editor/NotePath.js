import * as React from "react";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../actions";

export const NotePath = function ({ path }) {
    const dispatch = useDispatch();
    const items = path.map(p => (
        <li key={p.id} className="breadcrumb-item">
            <span className="cursor-pointer"
                  onClick={() => dispatch(setActiveNote(p))}>
                { p.title }
            </span>
        </li>
    ));

    return (
        <ol className="breadcrumb py-0 mb-1">
            { items }
        </ol>
    );
};