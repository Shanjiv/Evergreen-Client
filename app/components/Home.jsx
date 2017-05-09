import React, {Component} from 'react';

class Home extends Component {

    componentDidMount() {}
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">Username</li>
                            <li>
                                <a href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form onSubmit={this.OnAddGroup}>
                            <ul className="menu">
                                <li>
                                    <input type="search" placeholder="type new groupname" ref="search"/>
                                </li>
                                <li>
                                    <input type="submit" className="button" value="Add Group"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item active">Groupname</li>
                            <li className="list-group-item">Page 1</li>
                            <li className="list-group-item">Page 2</li>
                              <button className="dropdown button" type="button">Add new site</button>
                        </ul>
                    </li>
                    <li className="flex-item">
                      <ul className="list-group">
                          <li className="list-group-item active">Groupname</li>
                          <li className="list-group-item">Page 1</li>
                          <li className="list-group-item">Page 2</li>
                            <button className="dropdown button" type="button">Add new site</button>
                      </ul>
                    </li>
                    <li className="flex-item">
                      <ul className="list-group">
                          <li className="list-group-item active">Groupname</li>
                          <li className="list-group-item">Page 1</li>
                          <li className="list-group-item">Page 2</li>
                            <button className="dropdown button" type="button">Add new site</button>
                      </ul>
                    </li>
                    <li className="flex-item">
                      <ul className="list-group">
                          <li className="list-group-item active">Groupname</li>
                          <li className="list-group-item">Page 1</li>
                          <li className="list-group-item">Page 2</li>
                            <button className="dropdown button" type="button">Add new site</button>
                      </ul>
                    </li>
                    <li className="flex-item">
                      <ul className="list-group">
                          <li className="list-group-item active">Groupname</li>
                          <li className="list-group-item">Page 1</li>
                          <li className="list-group-item">Page 2</li>
                            <button className="dropdown button" type="button">Add new site</button>
                      </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
