import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="row">
                        <label>Select Server
                            <div class="larger-12 columns">
                                <select>
                                    <option value="husker">Husker</option>
                                    <option value="starbuck">Starbuck</option>
                                    <option value="hotdog">Hot Dog</option>
                                    <option value="apollo">Apollo</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div>
                        <button class="buttonAdd" type="button" data-toggle="example-dropdown">Add Server</button>
                        <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
                            Add server
                            <form>
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
                            </form>
                        </div>
                        <button class="buttonRemove" type="button" data-toggle="example-dropdown">Remove Server</button>
                        <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
                            Add server
                            <form>
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
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <label>Username
                                <input type="text" placeholder="Username"/>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <label>Username
                                <input type="password" placeholder="Password"/>
                            </label>
                        </div>
                    </div>
                    <button className="button expanded">Login</button>
                </form>
            </div>

        );
    }
}

export default Login;
