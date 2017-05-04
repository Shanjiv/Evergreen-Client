import React, {Component} from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

require('jquery.soap');

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorFlag: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLogin = () => {
    if (!this.state.username) {
      return this.setState({errorFlag: 'Please input username'})
    } else if (!this.state.password) {
      return this.setState({errorFlag: 'Please input password'})
    } else {
      axios.post('/login', {servername: this.props.selectedServer.serverName, serveradress: this.props.selectedServer.serverAdress, port: this.props.selectedServer.port})
        .then((result) => {
          $.soap({
          	url: `${this.props.selectedServer.serverName}:${this.props.selectedServer.port}`,
          	method: 'loginInformation',
          	data: {
          		userName: this.state.username,
          		userPassword: this.state.password
          	},
          	success: function (soapResponse) {
              this.setState({
                username: '',
                password: '',
                errorFlag: ''
              })
              this.props.router.push('/home')
          	},
          	error: function (SOAPResponse) {
          		this.setState({errorFlag: 'something wrong'})
          	}
          });
        })
        .catch((e) => {
          console.log('e!!!!', e)
          this.setState({errorFlag: e.response.data})
          console.error('error occured', e);
        })
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="row">
          <div className="large-12 columns">
            <label>
              <input name="username" onChange={this.handleInputChange} type="text" placeholder="Username"/>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <label>
              <input name="password" onChange={this.handleInputChange} type="password" placeholder="Password"/>
            </label>
          </div>
        </div>
        {
          !this.props.loginError && this.state.errorFlag &&
          <span style={{color: 'red', fontSize: 12}}>{this.state.errorFlag}</span>
        }
        {
          this.props.loginError &&
          <span style={{color: 'red', fontSize: 12}}>{this.props.loginError}</span>
        }
        <button type="button" onClick={this.handleLogin} className="button expanded">Login</button>
      </div>

    );
  }
}

export default Login;
