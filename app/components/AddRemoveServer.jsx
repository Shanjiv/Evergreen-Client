import React, {Component} from 'react';

class AddRemoveServer extends Component {
    render() {
        return (
            <div>
                <button class="buttonAdd" type="button" data-toggle="example-dropdown">Add Server</button>
                <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add server
                    <div class="row">
                        <div class="medium-6 columns">
                            <label>Server
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                        <div class="medium-6 columns">
                            <label>IP
                                <input type="text" placeholder="IP-adress"/>
                            </label>
                        </div>
                        <div class="medium-6 columns">
                            <label>Port
                                <input type="text" placeholder="Port"/>
                            </label>
                        </div>
                    </div>
                </div>
                <button class="buttonRemove" type="button" data-toggle="example-dropdown">Remove Server</button>
                <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
                    Add server
                    <div class="row">
                        <div class="medium-6 columns">
                            <label>Server
                                <input type="text" placeholder="Servername"/>
                            </label>
                        </div>
                    </div>
                    <div class="medium-6 columns">
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
