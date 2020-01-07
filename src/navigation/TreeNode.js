import * as React from "react";
import {Tree} from "./Tree";

export class TreeNode extends React.Component {

    setActiveNote() {
        return () => this.props.setActiveNote(this.props.note);
    }

    render() {

        const active = this.props.activeNote && this.props.note.id === this.props.activeNote.id;
        const activeClass = active ? 'text-white' : '';

        return (
            <li className="list-group-item border-0 px-0 py-0">
                <div className={"d-flex justify-content-between align-items-center py-2 " + activeClass} onClick={this.setActiveNote()}>
                    { this.props.note.title }
                </div>
                <div className="pl-3">
                    <Tree notes={ this.props.note.children }/>
                </div>
            </li>
        );
    }

}