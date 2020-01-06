import * as React from "react";
import {NoteContentContainer, NotePathContainer, NoteTitleContainer} from "./containers";

export class NoteEditor extends React.Component {

    render() {
        return (
            <div className="rounded bg-dark">
                <NoteTitleContainer/>
                <NotePathContainer/>
                <NoteContentContainer/>
            </div>
        );
    }

}