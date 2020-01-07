import {connect} from "react-redux";
import {Navigation} from "./Navigation";

const stateToProps = (state) => {
    return {
        notes: state.notes.notes,
        filterActive: !!state.notes.filter,
        filteredNotes: state.notes.filteredNotes
    };
};

const dispatchToProps = {
};

export const NavigationContainer = connect(stateToProps, dispatchToProps)(Navigation);