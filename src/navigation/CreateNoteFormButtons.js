import * as React from "react";

export const CreateNoteFormButtons = function ({ addNote, hideForm }) {
    return (
        <div className="btn-group">
            <button className="btn btn-sm btn-secondary text-center"
                    style={{ width: '30px' }}
                    onClick={addNote}>
                <i className="fa fa-check"/>
            </button>
            <button className="btn btn-sm btn-secondary text-center"
                    style={{ width: '30px' }}
                    onClick={hideForm}>
                <i className="fa fa-times"/>
            </button>
        </div>
    );
};