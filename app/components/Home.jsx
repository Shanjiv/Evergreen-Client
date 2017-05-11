import React, {Component} from 'react';
import axios from 'axios';
import Home_Nav from './Home_Nav';
import Page from './Page';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      groupInputFlag: null,
      pageInputFlag: null
    }
  }

  componentDidMount() {
    axios.post('/getUserPageConfig', {session: window.sessionStorage.getItem("session")}).then((userPageConfig) => {
      console.log('aa', userPageConfig.data);
      this.setState({groups: userPageConfig.data.Groups, ownerId: userPageConfig.data.OwnerId})
    }).catch((err) => {})
  }

  renameHandler = (index) => {
    this.setState(Object.assign({}, this.state, {
      groups: [
        ...this.state.groups.slice(0, index),
        Object.assign({}, this.state.groups[index], {
          Title: this.refs['groupInput' + index].value
        }),
        ...this.state.groups.slice(index + 1)
      ],
      groupInputFlag: null
    }), () => {
      this.saveChange();
    })
  }

  deleteHandler = (index) => {
    this.setState(Object.assign({}, this.state, {
      groups: [
        ...this.state.groups.slice(0, index),
        ...this.state.groups.slice(index + 1)
      ]
    }), () => {
      this.saveChange();
    })
  }

  createHandler = (name) => {
    let tempindex = 0;
    this.state.groups.map((entry) => {
      if (parseInt(entry.Index) > tempindex) {
        tempindex = parseInt(entry.Index);
      }
    })
    tempindex++;
    this.setState(Object.assign({}, this.state, {
      groups: [
        ...this.state.groups,
        {Title: name, Index: tempindex.toString()}
      ]
    }), () => {
      this.saveChange();
    })
  }

  saveChange = () => {

    let tempGroups = JSON.parse(JSON.stringify(this.state.groups));

    this.state.groups.map((entry, index) => {
      if (Object.prototype.toString.call( entry.Pages ) === '[object Object]') {
        tempGroups[index].Pages = entry.Pages.Id.toString();
      } else if (Object.prototype.toString.call( entry.Pages ) === '[object Array]') {
        tempGroups[index].Pages = [];
        entry.Pages.map((page) => {
          tempGroups[index].Pages.push(page.Id.toString())
        })
      } else {
        // delete tempGroups[index].Pages
      }
    })


    axios.post('modifyUserPageConfig', {session: window.sessionStorage.getItem("session"), config: {OwnerId: this.state.ownerId, Groups: tempGroups}})
      .then(() => {

      })
      .catch((err) => {
        console.error('error occured', err);
      })
  }

  render() {
    return (
      <div>
        <Home_Nav createHandler={this.createHandler} router={this.context.router}/>
        <ul className="flex-container">
          {this.state.groups && this.state.groups.map((entry, index) => {
            return (
              <li key={entry.Index} className="flex-item">
                <ul className="list-group">
                  <li className="list-group-item active">
                    <div className="handleGroupname">
                      <button onClick={() => {this.setState({groupInputFlag: index})}}>
                        Rename
                      </button>
                      <button onClick={() => {this.deleteHandler(index)}}>
                        Delete
                      </button>
                    </div>
                    { this.state.groupInputFlag === index ?
                      <div>
                        <input ref={`groupInput${index}`} type="text" defaultValue={entry.Title}/>
                        <button type="submit" onClick={() => this.renameHandler(index)}>Save</button>
                      </div>
                      :
                      <span>{entry.Title}</span>
                    }
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

          {/* <li className="flex-item">
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
          </li> */}
        </ul>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
