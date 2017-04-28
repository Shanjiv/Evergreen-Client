import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
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
            </div>

        );
    }
}

export default Login;
