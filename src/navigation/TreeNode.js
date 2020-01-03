import * as React from "react";
import {Tree} from "./Tree";

export class TreeNode extends React.Component {

    render() {
        return (
            <li className="list-group-item border-0 pr-0 py-0">
                <div className="d-flex justify-content-between align-items-center py-2">
                    { this.props.note.title }
                    { this.props.note.children.length !== 0 &&
                    <span className="badge badge-primary badge-pill px-2">
                            { this.props.note.children.length }
                        </span>
                    }
                </div>
                <Tree notes={ this.props.note.children }/>
            </li>
        );
    }

}