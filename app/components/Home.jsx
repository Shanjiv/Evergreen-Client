import React, {Component} from 'react';
import Home_Nav from './Home_nav';

class Home extends Component {

    componentDidMount() {}
    render() {
        return (
            <div>
                <Home_Nav/>
                <ul className="flex-container">
                    <li className="flex-item">
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
                                Groupname
                            </li>
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                    <div>
                                        Rename
                                    </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Page 1
                            </li>
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                    <div>
                                        Rename
                                    </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Page 2
                            </li>
                            <button className="dropdown button" type="button">Add new site</button>
                        </ul>
                    </li>
                    <li className="flex-item">
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
                                Groupname
                            </li>
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                    <div>
                                        Rename
                                    </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Page 1
                            </li>
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                    <div>
                                        Rename
                                    </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Page 2
                            </li>
                            <button className="dropdown button" type="button">Add new site</button>
                        </ul>
                    </li>
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

export default Home;
