import * as React from "react";
import {Note} from "../model/Note";

export class NoteTitle extends React.Component {

    onTitleChange() {
        return (event) => {
            const note = new Note({
                ...this.props.activeNote,
                title: event.target.value
            });
            this.props.updateNote(note);
        };
    }

    render() {
        return (
            <div className="form-group mb-1">
                <input type="text"
                       className="form-control form-control-lg bg-dark border-dark text-white font-weight-bold"
                       value={this.props.activeNote ? this.props.activeNote.title : ''}
                       onChange={this.onTitleChange()}/>
            </div>
        );
    }

}