import React, {Component} from 'react';

class AddRemoveServer extends Component {
    render() {
        return (
            <div className="AddRemoveServer">
                <button className="button" type="button" data-toggle="example-dropdown">Add Server</button>
                <div className="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add Server
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
                <button className="button" type="button" data-toggle="example-dropdown-1">Remove Server</button>
                <div className="dropdown-pane" id="example-dropdown-1" data-dropdown data-auto-focus="true">
                    Remove Server
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Servername
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRemoveServer;
