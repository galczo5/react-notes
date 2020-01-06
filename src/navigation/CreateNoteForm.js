import * as React from "react";

export class CreateNoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newNoteTitle: '',
            formVisible: false
        };
    }

    addNote() {
        return () => {
            this.props.addNote(this.state.newNoteTitle);
            this.setState({
                newNoteTitle: '',
                formVisible: false
            });
        };
    }

    showForm() {
        return () => {
            this.setState({
                formVisible: true
            });
        }
    }

    updateTitle() {
        return (event) => this.setState({
            newNoteTitle: event.target.value
        });
    }

    render() {

        return (
            <div style={{
                     height: '32px'
                 }}>
                { !this.state.formVisible &&
                    <a href="#" onClick={this.showForm()}>Create new note</a>
                }
                { this.state.formVisible &&
                    <div className="row">
                        <div className="col pr-0">
                            <input type="text"
                                   className="form-control form-control-sm border-success"
                                   onChange={this.updateTitle()}
                                   placeholder="Note title"/>
                        </div>
                        <div className="col-auto pr-0">
                            <button className="btn btn-sm btn-success"
                                    onClick={this.addNote()}>
                                Save
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }

}