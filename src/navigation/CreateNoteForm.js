import * as React from "react";

export class CreateNoteForm extends React.Component {

    render() {
        return (
            <div>
                <div className="form-group">
                    <button className="btn btn-sm btn-primary mr-1">Create</button>
                    <button className="btn btn-sm btn-success">Save</button>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"/>
                </div>
            </div>
        );
    }

}