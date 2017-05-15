import React, {Component} from 'react';

class newPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">Username</li>
                            <li>
                                <a onClick={this.logoutHandler}>Logout</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form>
                            <ul className="menu">
                                <li>
                                    <select>
                                        <option value="graph">Graph</option>
                                        <option value="toggle">Toggle Button</option>
                                        <option value="lamp">LED</option>
                                          <option value="inputfield">Inputfield</option>
                                        <option value="outputfield">Outputfield</option>
                                    </select>
                                </li>
                                <li>
                                    <input type="submit" className="button" value="Add Widget"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                  <div>
                                      Rename
                                  </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Graph</li>
                            <button className="dropdown button" type="button">Configure Widget</button>
                            <div className="large-12 columns">
                                <form>
                                    <div class="row">
                                        <div class="larger-12 columns">
                                            <label>Bind element
                                                <select>
                                                    <option value="bindElement">bindValue</option>
                                                    <option value="bindElement">bindName</option>
                                                </select>
                                            </label>
                                            <label>Select machine
                                                <select>
                                                    <option value="">TEST_MACHINE</option>
                                                    <option value="">TEST_MACHINE2</option>
                                                </select>
                                            </label>
                                            <label>Bind value
                                                <select>
                                                    <option value="">StaticBoolean</option>
                                                    <option value="">Double</option>
                                                    <option value="">Integer</option>
                                                    <option value="">DynamicBoolean</option>
                                                </select>
                                            </label>
                                            <label>Update intervall in milliseconds
                                                <input type="number" value="5"/>
                                            </label>
                                            <input type="checkbox"/>
                                            <label for="checkbox2">Activate Subscribe (Dataupdate)</label>
                                        </div>
                                    </div>
                                    <button className="button expanded">Set Widget</button>
                                </form>
                            </div>
                        </ul>
                    </li>


                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                  <div>
                                      Rename
                                  </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Toggle Button</li>
                            <button className="dropdown button" type="button">Configure Widget</button>
                            <div className="large-12 columns">
                                <form>
                                    <div class="row">
                                        <div class="larger-12 columns">
                                            <label>Bind element
                                                <select>
                                                    <option value="outValue">outValue</option>
                                                    <option value="inValue">inValue</option>
                                                </select>
                                            </label>
                                            <label>Select machine
                                                <select>
                                                    <option value="">TEST_MACHINE</option>
                                                    <option value="">TEST_MACHINE2</option>
                                                </select>
                                            </label>
                                            <label>Bind value
                                                <select>
                                                    <option value="">StaticBoolean</option>
                                                    <option value="">Double</option>
                                                    <option value="">Integer</option>
                                                    <option value="">DynamicBoolean</option>
                                                </select>
                                            </label>
                                            <label>Update intervall in milliseconds
                                                <input type="number" value="5"/>
                                            </label>
                                            <input type="checkbox"/>
                                            <label for="checkbox2">Activate Subscribe (Dataupdate)</label>
                                        </div>
                                    </div>
                                    <button className="button expanded">Set Widget</button>
                                </form>
                            </div>
                        </ul>
                    </li>

                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                  <div>
                                      Rename
                                  </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Inputfield</li>
                            <button className="dropdown button" type="button">Configure Widget</button>
                            <div className="large-12 columns">
                                <form>
                                    <div class="row">
                                        <div class="larger-12 columns">
                                            <label>Bind element
                                                <select>
                                                    <option value="bindElement">bindValue</option>
                                                    <option value="bindElement">bindName</option>
                                                </select>
                                            </label>
                                            <label>Select machine
                                                <select>
                                                    <option value="">TEST_MACHINE</option>
                                                    <option value="">TEST_MACHINE2</option>
                                                </select>
                                            </label>
                                            <label>Bind value
                                                <select>
                                                    <option value="">StaticBoolean</option>
                                                    <option value="">Double</option>
                                                    <option value="">Integer</option>
                                                    <option value="">DynamicBoolean</option>
                                                </select>
                                            </label>
                                            <label>Update intervall in milliseconds
                                                <input type="number" value="5"/>
                                            </label>
                                            <input type="checkbox"/>
                                            <label for="checkbox2">Activate Subscribe (Dataupdate)</label>
                                        </div>
                                    </div>
                                    <button className="button expanded">Set Widget</button>
                                </form>
                            </div>
                        </ul>
                    </li>




                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                  <div>
                                      Rename
                                  </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                Outputfield</li>
                            <button className="dropdown button" type="button">Configure Widget</button>
                            <div className="large-12 columns">
                                <form>
                                    <div class="row">
                                        <div class="larger-12 columns">
                                            <label>Bind element
                                                <select>
                                                    <option value="bindElement">bindValue</option>
                                                    <option value="bindElement">bindName</option>
                                                </select>
                                            </label>
                                            <label>Select machine
                                                <select>
                                                    <option value="">TEST_MACHINE</option>
                                                    <option value="">TEST_MACHINE2</option>
                                                </select>
                                            </label>
                                            <label>Bind value
                                                <select>
                                                    <option value="">StaticBoolean</option>
                                                    <option value="">Double</option>
                                                    <option value="">Integer</option>
                                                    <option value="">DynamicBoolean</option>
                                                </select>
                                            </label>
                                            <label>Update intervall in milliseconds
                                                <input type="number" value="5"/>
                                            </label>
                                            <input type="checkbox"/>
                                            <label for="checkbox2">Activate Subscribe (Dataupdate)</label>
                                        </div>
                                    </div>
                                    <button className="button expanded">Set Widget</button>
                                </form>
                            </div>
                        </ul>
                    </li>



                    <li className="flex-item">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="handleGroupname">
                                  <div>
                                      Rename
                                  </div>
                                    <div>
                                        Delete
                                    </div>
                                </div>
                                LED</li>
                            <button className="dropdown button" type="button">Configure Widget</button>
                            <div className="large-12 columns">
                                <form>
                                    <div class="row">
                                        <div class="larger-12 columns">
                                            <label>Bind element
                                                <select>
                                                    <option value="bindElement">bindValue</option>
                                                    <option value="bindElement">bindName</option>
                                                </select>
                                            </label>
                                            <label>Select machine
                                                <select>
                                                    <option value="">TEST_MACHINE</option>
                                                    <option value="">TEST_MACHINE2</option>
                                                </select>
                                            </label>
                                            <label>Bind value
                                                <select>
                                                    <option value="">StaticBoolean</option>
                                                    <option value="">Double</option>
                                                    <option value="">Integer</option>
                                                    <option value="">DynamicBoolean</option>
                                                </select>
                                            </label>
                                            <label>Update intervall in milliseconds
                                                <input type="number" value="5"/>
                                            </label>
                                            <input type="checkbox"/>
                                            <label for="checkbox2">Activate Subscribe (Dataupdate)</label>
                                        </div>
                                    </div>
                                    <button className="button expanded">Set Widget</button>
                                </form>
                            </div>
                        </ul>
                    </li>




                </ul>
            </div>
        );
    }
}
export default newPage;
