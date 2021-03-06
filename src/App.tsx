import React from 'react';
import {Header} from "./header/Header";

import './App.css'
import {NoteEditor} from "./editor/NoteEditor";
import {Navigation} from "./navigation/Navigation";

export const App = function () {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <Header/>
                <div className="card-body m-0 p-0">
                    <div className="app-grid">
                        <div className="p-3">
                            <Navigation/>
                        </div>
                        <div className="p-3">
                            <NoteEditor/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};