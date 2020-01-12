import * as React from "react";
import {NoteEditorPlaceholder} from "./NoteEditorPlaceholder";
import {NoteTitle} from "./NoteTitle";
import {NoteContent} from "./NoteContent";
import {NotePath} from "./NotePath";
import {useSelector} from "react-redux";
import {ActiveNote, Notes} from "../reducers";
import {Note} from "../model/Note";
import {EditorTabs} from "./EditorTabs";

export const NoteEditor = function () {

    const activeNote: ActiveNote = useSelector<Notes, ActiveNote>((state: Notes) => state.active);
    const path = useSelector<Notes, Array<Note>>((state: Notes) => state.path);

    return (
        <>
            <div>
                <EditorTabs/>
            </div>
            { activeNote &&
                <>
                    <div className="rounded-bottom bg-dark">
                        <NoteTitle activeNote={activeNote}/>
                        <NotePath path={path}/>
                        <NoteContent activeNote={activeNote}/>
                    </div>
                </>
            }
            { !activeNote &&
                <div className="rounded bg-dark">
                    <NoteEditorPlaceholder/>
                </div>
            }
        </>
    );
};