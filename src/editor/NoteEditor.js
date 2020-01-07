import * as React from "react";
import {NoteContentContainer, NotePathContainer, NoteTitleContainer} from "./containers";
import {NoteEditorPlaceholder} from "./NoteEditorPlaceholder";

export class NoteEditor extends React.Component {

    render() {
        return (
            <div className="rounded bg-dark">
                { this.props.activeNote &&
                    <React.Fragment>
                        <NoteTitleContainer/>
                        <NotePathContainer/>
                        <NoteContentContainer/>
                    </React.Fragment>
                }
                { !this.props.activeNote &&
                   <NoteEditorPlaceholder/>
                }
            </div>
        );
    }

}