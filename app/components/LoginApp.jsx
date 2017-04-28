import React from 'react';
import Login from './Login';
import ServerBox from './ServerBox';
import AddRemoveServer from './AddRemoveServer';


const LoginApp = () => {
    return (
        <div>
            <h1>Evergreen-Login</h1>
            <form>
                <ServerBox/>
                <AddRemoveServer/>
                <Login/>
            </form>
        </div>
    );
}

export default LoginApp;
