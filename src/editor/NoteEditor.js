import * as React from "react";
import {NoteTitle} from "./NoteTitle";
import {NotePath} from "./NotePath";
import {NoteContent} from "./NoteContent";

export class NoteEditor extends React.Component {

    render() {
        return (
            <div className="rounded bg-dark">
                <NoteTitle/>
                <NotePath/>
                <NoteContent/>
            </div>
        );
    }

}