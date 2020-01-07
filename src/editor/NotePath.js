import * as React from "react";

export class NotePath extends React.Component {

    setActiveNote(note) {
        return () => this.props.setActiveNote(note);
    }

    render() {

        const items = this.props.path.map(p => (
            <li className="breadcrumb-item">
                <span className="cursor-pointer" onClick={this.setActiveNote(p)}>{ p.title }</span>
            </li>
        ));

        return (
            <ol className="breadcrumb py-0 mb-1">
                { items }
            </ol>
        );
    }

}