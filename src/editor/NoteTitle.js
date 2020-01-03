import * as React from "react";

export class NoteTitle extends React.Component {

    render() {
        return (
            <div className="form-group mb-1">
                <input type="text" className="form-control form-control-lg bg-dark border-dark" placeholder="Title"/>
            </div>
        );
    }

}