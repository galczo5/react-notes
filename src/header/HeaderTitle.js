import * as React from "react";

export class HeaderTitle extends React.Component {

    render() {
        return (
            <div className="card-title mb-0">
                <i className="fas fa-sticky-note mr-2"></i>
                <b>
                    { this.props.title }
                </b>
            </div>
        );
    }

}