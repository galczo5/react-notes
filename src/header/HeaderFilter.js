import * as React from "react";

export class HeaderFilter extends React.Component {

    updateFilter() {
        return (event) =>
            this.props.updateFilter(event.target.value);
    }

    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <input type="text"
                       className="form-control"
                       placeholder="Search..."
                       value={this.props.filter}
                       onChange={this.updateFilter()}/>
            </div>
        );
    }

}