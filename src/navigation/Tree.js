import * as React from "react";
import {TreeNodeContainer} from "./TreeNodeContainer";

export class Tree extends React.Component {

    render() {
        let items = this.props.notes.map(note => (
            <TreeNodeContainer key={note.id} note={note}/>
        ));

        return (
            <ul className="list-group border-0">
                { items }
            </ul>
        );
    }

}