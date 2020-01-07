import {connect} from "react-redux";
import {HeaderFilter} from "./HeaderFilter";

const stateToProps = state => ({
   filter: state.notes.filter
});

const dispatchToProps = {
    updateFilter: (filter) => ({
        type: 'SET_FILTER',
        filter: filter
    })
};

export const HeaderFilterContainer = connect(stateToProps, dispatchToProps)(HeaderFilter)