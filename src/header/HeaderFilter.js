import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFilter} from "../actions";

export const HeaderFilter = function () {

    const filter = useSelector(state => state.notes.filter);
    const dispatch = useDispatch();

    const onFilterUpdate = (event) => {
        dispatch(updateFilter(event.target.value));
    };

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-search"/>
                    </span>
            </div>
            <input type="text"
                   className="form-control"
                   placeholder="Search..."
                   value={filter}
                   onChange={onFilterUpdate}/>
        </div>
    );
};