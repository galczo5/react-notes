import * as React from "react";
import {Note} from "../model/Note";

export class NoteContent extends React.Component {

    contentChange() {
        return (event) => {
            const note = new Note({
                ...this.props.activeNote,
                content: event.target.value
            });
            this.props.updateNote(note);
        }
    }

    render() {
        return (
            <div className="form-group mb-0">
                    <textarea className="form-control pl-3 bg-dark border-dark"
                              style={{
                                  height: '50vh'
                              }} value={this.props.activeNote ? this.props.activeNote.content : ''}
                              onChange={this.contentChange()}></textarea>
            </div>
        );
    }

}