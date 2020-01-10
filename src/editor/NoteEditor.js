import * as React from "react";
import {NoteEditorPlaceholder} from "./NoteEditorPlaceholder";
import {NoteTitle} from "./NoteTitle";
import {NoteContent} from "./NoteContent";
import {NotePath} from "./NotePath";
import {useSelector} from "react-redux";

export const NoteEditor = function () {

    const activeNote = useSelector(state => state.notes.active);
    const path = useSelector(state => state.notes.path);

    return (
        <div className="rounded bg-dark">
            { activeNote &&
                <>
                    <NoteTitle activeNote={activeNote}/>
                    <NotePath path={path}/>
                    <NoteContent activeNote={activeNote}/>
                </>
            }
            { !activeNote &&
                <NoteEditorPlaceholder/>
            }
        </div>
    );
};