import {connect} from "react-redux";
import {TreeNode} from "./TreeNode";

const stateToProps = (state) => ({
    activeNote: state.notes.active
});

const dispatchToProps = {
    setActiveNote: (note) => ({
        type: 'SET_ACTIVE_NOTE',
        note
    })
};

export const TreeNodeContainer = connect(stateToProps, dispatchToProps)(TreeNode);