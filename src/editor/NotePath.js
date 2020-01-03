import * as React from "react";

export class NotePath extends React.Component {

    render() {
        return (
            <ol className="breadcrumb py-0 mb-1">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active">Data</li>
            </ol>
        );
    }

}