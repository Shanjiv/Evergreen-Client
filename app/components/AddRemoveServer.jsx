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
        if (this.state.removeFlag == true) {
            this.setState({removeFlag: false});    
        }
        this.setState({addFlag: !addFlag});
    }

    showRemoveDropdown() {
        let {removeFlag} = this.state;
        if (this.state.addFlag == true) {
            this.setState({addFlag: false});    
        }
        this.setState({removeFlag: !removeFlag});
    }

    render() {
        return (
            <div className="AddRemoveServer">
                <button className="button add-btn" type="button" data-toggle="example-dropdown" onClick={this.showAddDropdown.bind(this)} >Add Server</button>
                { this.state.addFlag == true ?
                <div className="dropdown-pane-new add-dropdown" id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add server
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Servername
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>Ip-Adress
                                <input type="text" placeholder="IP"/>
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
                <button className="button remove-btn" type="button" data-toggle="example-dropdown" onClick={this.showRemoveDropdown.bind(this)}>Remove Server</button>
                { this.state.removeFlag == true ?
                <div className="dropdown-pane-new remove-dropdown" id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add server
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Servername
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                    </div>
                </div>
                : null
                }
            </div>
        );
    }
}

export default AddRemoveServer;
