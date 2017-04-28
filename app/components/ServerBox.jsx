import React, {Component} from 'react';

class ServerBox extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default ServerBox;
