import * as React from "react";
import {HeaderTitle} from "./HeaderTitle";
import {HeaderFilter} from "./HeaderFilter";

export class Header extends React.Component {

    render() {
        return (
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col">
                        <HeaderTitle title="React notes app"/>
                    </div>
                    <div className="col-auto">
                        <HeaderFilter/>
                    </div>
                </div>
            </div>
        );
    }

}