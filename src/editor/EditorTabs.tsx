import * as React from 'react';
import {useSelector} from "react-redux";
import {ActiveNote, Notes} from "../reducers";
import {Note} from "../model/Note";
import {EditorTab} from "./EditorTab";

export function EditorTabs() {
    const opened = useSelector<Notes, Array<Note>>(state => state.openedNotes);
    const activeNote = useSelector<Notes, ActiveNote>(state => state.active);
    const tabs = opened.map(tab => {
        return (
            <EditorTab tab={tab} activeNote={activeNote}/>
        )
    });

    return (
        <div className="row mx-0">
            {tabs}
        </div>
    )
}