import * as React from "react";
import {TreeNode} from "./TreeNode";
import {Note} from "../model/Note";
import {ActiveNote} from "../reducers";

export const Tree = function (props: { notes: Array<Note>, activeNote: ActiveNote }) {

    let items = props.notes.map(note => (
        <TreeNode key={note.getId()} note={note} activeNote={props.activeNote}/>
    ));

    return (
        <ul className="list-group border-0">
            { items }
        </ul>
    );
};