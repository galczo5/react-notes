import * as React from "react";

export const HeaderTitle = function (props: { title: string }) {
    return (
        <div className="card-title mb-0">
            <i className="fas fa-sticky-note mr-2"/>
            <b>
                { props.title }
            </b>
        </div>
    );
};