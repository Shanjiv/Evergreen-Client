import React, {Component} from 'react';

class AddRemoveServer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFlag: false,
            removeFlag: false
        };
    }

    showAddDropdown() {
        let {addFlag} = this.state;
        this.setState({addFlag: !addFlag});
    }

    showRemoveDropdown() {
        let {removeFlag} = this.state;
        this.setState({removeFlag: !removeFlag});
    }

    render() {
        return (
            <div>
                <button className="buttonAdd" type="button" data-toggle="example-dropdown" onClick={this.showAddDropdown.bind(this)} >Add Server</button>
                { this.state.addFlag == true ?
                <div className="dropdown-pane-new " id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add server
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Server
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>IP
                                <input type="text" placeholder="IP-adress"/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>Port
                                <input type="text" placeholder="Port"/>
                            </label>
                        </div>
                    </div>
                </div>
                : null
                }
                <button className="buttonRemove" type="button" data-toggle="example-dropdown" onClick={this.showRemoveDropdown.bind(this)}>Remove Server</button>
                { this.state.removeFlag == true ?
                <div className="dropdown-pane-new {this.state.removeFlag ? show-dropdown : null}" id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add server
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Server
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                    </div>
                    <div className="medium-6 columns">
                        <label>Port
                            <input type="text" placeholder="Port"/>
                        </label>
                    </div>
                </div>
                : null
                }
            </div>
        );
    }
}

export default AddRemoveServer;
