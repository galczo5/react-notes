import * as React from "react";
import {TreeNode} from "./TreeNode";

export class Tree extends React.Component {

    render() {
        let items = this.props.notes.map(note => (
            <TreeNode key={note.id} note={note}/>
        ));

        return (
            <ul className="list-group border-0">
                { items }
            </ul>
        );
    }

}