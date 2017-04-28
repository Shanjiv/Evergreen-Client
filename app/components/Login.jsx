import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="large-12 columns">
                        <label>Username
                            <input type="text" placeholder="Username"/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="large-12 columns">
                        <label>Password
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
