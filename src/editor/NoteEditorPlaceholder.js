import React from 'react';

export function NoteEditorPlaceholder() {
    return (
        <div className="d-flex align-items-center justify-content-center"
             style={{ height: '60vh' }}>
            <div className="font-weight-bold"
                 style={{ opacity: '.3'}}>
                Select note to update
            </div>
        </div>
    );
}