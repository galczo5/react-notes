import * as React from "react";
import {HeaderTitle} from "./HeaderTitle";
import {HeaderFilterContainer} from "./HeaderFilterContainer";

export class Header extends React.Component {

    render() {
        return (
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col">
                        <HeaderTitle title="React notes app"/>
                    </div>
                    <div className="col-auto">
                        <HeaderFilterContainer/>
                    </div>
                </div>
            </div>
        );
    }

}