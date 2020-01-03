import * as React from "react";

export class HeaderTitle extends React.Component {

    render() {
        return (
            <div className="card-title mb-0">
                { this.props.title }
            </div>
        );
    }

}