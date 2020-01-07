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

    hideForm() {
        return () => {
            this.setState({
                formVisible: false
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
                    <span className="font-weight-bold cursor-pointer" onClick={this.showForm()}>Create new note</span>
                }
                { this.state.formVisible &&
                    <div className="row">
                        <div className="col pr-0">
                            <input type="text"
                                   className="form-control form-control-sm border-success"
                                   onChange={this.updateTitle()}
                                   placeholder="Note title"/>
                        </div>
                        <div className="col-auto pr-0 pl-1">
                            <div className="btn-group">
                                <button className="btn btn-sm btn-secondary text-center"
                                        style={{ width: '30px' }}
                                        onClick={this.addNote()}>
                                    <i className="fa fa-check"></i>
                                </button>
                                <button className="btn btn-sm btn-secondary text-center"
                                        style={{ width: '30px' }}
                                        onClick={this.hideForm()}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

}