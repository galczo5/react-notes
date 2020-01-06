import {connect} from "react-redux";
import {Navigation} from "./Navigation";

const stateToProps = (state) => {
    return state.notes;
};

const dispatchToProps = {
};

export const NavigationContainer = connect(stateToProps, dispatchToProps)(Navigation);