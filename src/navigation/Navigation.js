import * as React from "react";
import {Tree} from "./Tree";
import {CreateNoteForm} from "./CreateNoteForm";

import {notes} from "../model/TestData";

export class Navigation extends React.Component {

    render() {
        return (
            <div>
                <CreateNoteForm/>
                <Tree notes={notes}/>
            </div>
        );
    }

}