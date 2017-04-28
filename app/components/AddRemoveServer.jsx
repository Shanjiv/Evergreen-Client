import React, {Component} from 'react';

class AddRemoveServer extends Component {
    render() {
        return (
            <div>
                <button className="buttonAdd" type="button" data-toggle="example-dropdown">Add Server</button>
                <div className="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
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
                <button className="buttonRemove" type="button" data-toggle="example-dropdown">Remove Server</button>
                <div className="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
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
            </div>
        );
    }
}

export default AddRemoveServer;
