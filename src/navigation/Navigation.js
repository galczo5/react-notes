import * as React from "react";
import {CreateNoteFormContainer} from "./CreateNoteFormContainer";
import {Tree} from "./Tree";

export class Navigation extends React.Component {

    setRootActive() {
        return () => {
            this.props.setRootActive();
        }
    }

    render() {
        return (
            <div>
                <CreateNoteFormContainer/>
                <Tree notes={this.props.notes}/>
            </div>
        );
    }

}