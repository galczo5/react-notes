import * as React from "react";
import {CreateNoteFormButtons} from "./CreateNoteFormButtons";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addNote} from "../actions";

export const CreateNoteForm = function () {

    const dispatch = useDispatch();
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');

    const createNote = () => {
        dispatch(addNote(title));
        setTitle('');
        setFormVisible(false);
    };

    const hideForm = () => setFormVisible(false);
    const showForm = () => setFormVisible(true);

    const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

    return (
        <div style={{ height: '32px' }}>
            { !formVisible &&
                <span className="font-weight-bold cursor-pointer" onClick={showForm}>
                    Create new note
                </span>
            }
            { formVisible &&
                <div className="row">
                    <div className="col pr-0">
                        <input type="text"
                               className="form-control form-control-sm border-success"
                               value={title}
                               onChange={updateTitle}
                               placeholder="Note title"/>
                    </div>
                    <div className="col-auto pr-0 pl-1">
                        <CreateNoteFormButtons addNote={createNote} hideForm={hideForm}/>
                    </div>
                </div>
            }
        </div>
    );

};