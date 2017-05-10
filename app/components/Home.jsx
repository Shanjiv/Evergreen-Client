import React, {Component} from 'react';
import axios from 'axios';
import Home_Nav from './Home_Nav';
import Page from './Page';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    // axios.post('/logged', {session: window.sessionStorage.getItem("session")}).then((result) => {
    //   axios.post('/getUserPageConfig', {session: window.sessionStorage.getItem("session")}).then((userPageConfig) => {
    //     console.log('aa', userPageConfig.data);
    //     this.setState({groups: userPageConfig.data.Groups})
    //   }).catch((err) => {})
    // }).catch((e) => {
    //   // console.log('e', e.response);
    //
    //   this.context.router.push('/')
    // })
  }

  render() {
    return (
      <div>
        <Home_Nav router={this.context.router}/>
        <ul className="flex-container">
          {this.state.groups && this.state.groups.map((entry) => {
            return (
              <li key={entry.Index} className="flex-item">
                <ul className="list-group">
                  <li className="list-group-item active">
                    <div className="handleGroupname">
                      <div>
                        Rename
                      </div>
                      <div>
                        Delete
                      </div>
                    </div>
                    {entry.Title}
                  </li>
                  { entry.Pages && Object.prototype.toString.call( entry.Pages ) === '[object Array]' && entry.Pages.map((page, pageIndex) => {
                    return (
                      <li key={pageIndex} className="list-group-item">
                        <div className="handleGroupname">
                          <div>
                            Rename
                          </div>
                          <div>
                            Delete
                          </div>
                        </div>
                        {page.Title}
                      </li>
                    )
                  })}

                  { entry.Pages && Object.prototype.toString.call( entry.Pages ) === '[object Object]' &&
                    <li className="list-group-item">
                      <div className="handleGroupname">
                        <div>
                          Renamea
                        </div>
                        <div>
                          Delete
                        </div>
                      </div>
                      {entry.Pages.Title}
                    </li>
                  }

                  <button className="dropdown button" type="button">Add new site</button>
                </ul>
              </li>
            )
          })}

          <li className="flex-item">
            <ul className="list-group">
              <li className="list-group-item active">Groupname</li>
              <button className="dropdown button" type="button">Add new site</button>

              <div className="large-12 columns">
                <label>
                  <input name="addServerName" type="text" placeholder="Sitename" onChange={this.handleInputChange}/>
                </label>
              </div>
              <button type="button" className="button expanded" onClick={this.addServer}>Add new site</button>

            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
