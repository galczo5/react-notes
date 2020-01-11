import * as React from "react";

export const CreateNoteFormButtons = function (props: { addNote: () => void, hideForm: () => void }) {
    return (
        <div className="btn-group">
            <button className="btn btn-sm btn-secondary text-center"
                    style={{ width: '30px' }}
                    onClick={props.addNote}>
                <i className="fa fa-check"/>
            </button>
            <button className="btn btn-sm btn-secondary text-center"
                    style={{ width: '30px' }}
                    onClick={props.hideForm}>
                <i className="fa fa-times"/>
            </button>
        </div>
    );
};