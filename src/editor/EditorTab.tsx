import * as React from "react";
import {Note} from "../model/Note";
import {ActiveNote} from "../reducers";
import {closeActive, setActiveNote} from "../actions";
import {useDispatch} from "react-redux";

export function EditorTab(props: { tab: Note, activeNote: ActiveNote }) {

    const dispatch = useDispatch();
    let activeClass = props.activeNote && props.tab.getId() === props.activeNote.getId() ? 'bg-dark rounded-top' : '';
    let className = `col-auto py-2 px-3 text-truncate ` + activeClass;

    const setActive = () => {
        dispatch(setActiveNote(props.tab))
    };

    const close = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        dispatch(closeActive());
    };

    return (
      <div className={className} style={{ maxWidth: '100px' }} onClick={setActive}>
          { activeClass &&
            <i className="mr-2 fa fa-times" onClick={close}/>
          }
          { props.tab.getTitle() }
      </div>
    );
}