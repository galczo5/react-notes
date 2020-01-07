import React from 'react';
import {Header} from "./header/Header.js";

import './App.css'
import {NavigationContainer} from "./navigation/NavigationContainer";
import {NoteEditorContainer} from "./editor/containers";

class App extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <Header/>
                    <div className="card-body m-0 p-0">
                        <div className="app-grid">
                            <div className="p-3">
                                <NavigationContainer/>
                            </div>
                            <div className="p-3">
                                <NoteEditorContainer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
