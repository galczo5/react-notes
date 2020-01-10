import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFilter} from "../actions";
import {Notes} from "../reducers";

export const HeaderFilter = function () {

    const filter = useSelector<Notes, string>(state => state.filter);
    const dispatch = useDispatch();

    const onFilterUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(updateFilter(value));
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