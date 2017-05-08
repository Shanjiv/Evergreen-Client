import React, {Component} from 'react';

class Home extends Component {

    componentDidMount() {}
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        admin
                    </div>
                    <div className="top-bar-right">
                        <a href="#">Logout</a>
                    </div>
                </div>
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item active">List Group Item 1 (Active)</li>
                            <li className="list-group-item">List Group Item 2</li>
                            <li className="list-group-item">List Group Item 3</li>
                        </ul>
                    </li>
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item active">List Group Item 1 (Active)</li>
                            <li className="list-group-item">List Group Item 2</li>
                            <li className="list-group-item">List Group Item 3</li>
                        </ul>
                    </li>
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item active">List Group Item 1 (Active)</li>
                            <li className="list-group-item">List Group Item 2</li>
                            <li className="list-group-item">List Group Item 3</li>
                        </ul>
                    </li>
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item active">List Group Item 1 (Active)</li>
                            <li className="list-group-item">List Group Item 2</li>
                            <li className="list-group-item">List Group Item 3</li>
                        </ul>
                    </li>
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item active">List Group Item 1 (Active)</li>
                            <li className="list-group-item">List Group Item 2</li>
                            <li className="list-group-item">List Group Item 3</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
