import * as React from "react";

export class NoteContent extends React.Component {

    render() {
        return (
            <div className="form-group mb-0">
                    <textarea className="form-control pl-3 bg-dark border-dark"
                              style={{
                                  height: '50vh'
                              }} defaultValue=""></textarea>
            </div>
        );
    }

}