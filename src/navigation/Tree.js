import * as React from "react";
import {TreeNode} from "./TreeNode";

export const Tree = function ({ notes, activeNote }) {

    let items = notes.map(note => (
        <TreeNode key={note.id} note={note} activeNote={activeNote}/>
    ));

    return (
        <ul className="list-group border-0">
            { items }
        </ul>
    );
};