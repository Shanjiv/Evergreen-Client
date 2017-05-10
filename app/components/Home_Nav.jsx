import React, {Component} from 'react';

class Home_Nav extends Component {

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
            </div>
        );
    }
}

export default Home_Nav;
