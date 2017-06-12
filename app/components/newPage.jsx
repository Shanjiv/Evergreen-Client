import React, {Component} from 'react';
import axios from 'axios';
import Widget from './Widget';
const io = require('socket.io-client');
const socket = io();
import AsyncWaterfall from 'async-waterfall';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import _ from 'lodash';

class newPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      nodes: [],
      widgets: [],
      widgetselect: 'graph',
      page: {},
      username: '',
      layouts: {},
      breakpoint: '',
      grid: {
        x: 0,
        y: 0,
        w: 1,
        h: 15,
        minW: 1,
        maxW: 1000,
        minH: 7,
        maxH: 1000,
        static: false,
        isDraggable: true,
        isResizable: true
      }
    }
  }

  componentDidMount() {

    this.setState({username: window.sessionStorage.getItem("username")})

    axios.post('/rest/page/get', {session: window.sessionStorage.getItem("session"), page: this.props.params.pageId}).then((page) => {

      if (page.data.Id) {
        this.setState({
          page: {Id: page.data.Id, Title: page.data.Title, CreatorId: page.data.CreatorId},
          widgets: page.data.widgets,
          layouts: page.data.layouts
        }, () => {
          this.initialSubscribe();
        })
      }

    }).catch((err) => {
      console.error('err', err);
    })

    socket.on('subscription_result', (socketData) => {
      if (socketData.response.notifications && Object.prototype.toString.call( socketData.response.notifications.UserNotifications ) === '[object Object]') {
        // if (parseInt(socketData.response.notifications.UserNotifications.ContextId) <= this.state.widgets.length - 1) {
        let index = this.findIndex(this.state.widgets, socketData.response.notifications.UserNotifications.ContextId)

        if (index !== -1) {
          this.setState({
            widgets: [
              ...this.state.widgets.slice(0, index),
              Object.assign({}, this.state.widgets[index], {
                value: socketData.response.notifications.UserNotifications.Variable.VarValue
              }),
              ...this.state.widgets.slice(index + 1)
            ]
          })
        }

        // }
      } else {
        socketData.response.notifications.UserNotifications.map((entry) => {
          // if (parseInt(entry.ContextId) <= this.state.widgets.length - 1) {

          let index = this.findIndex(this.state.widgets, entry.ContextId);

          if (index !== -1) {
            this.setState({
              widgets: [
                ...this.state.widgets.slice(0, index),
                Object.assign({}, this.state.widgets[index], {
                  value: entry.Variable.VarValue,
                }),
                ...this.state.widgets.slice(index + 1)
              ]
            })
          }
          // }
        })
      }
    })

    axios.post('/rest/machine/get', {session: window.sessionStorage.getItem("session")})
      .then((result) => {
        if (result.data.Machines && Object.prototype.toString.call( result.data.Machines ) === '[object Object]') {
          this.setState({
            names: [...[], result.data.Machines.Machines]
          })
        } else {
          this.setState({
            names: result.data.Machines
          })
        }
      })
      .catch((e) => {
        console.error('aa', e);
      })

    axios.post('/rest/node/get', {session: window.sessionStorage.getItem("session")})
      .then((result) => {
        if (result.data.GetAllNodesResponse.Nodes && Object.prototype.toString.call( result.data.GetAllNodesResponse.Nodes ) === '[object Object]') {
          this.setState({
            nodes: [...[], result.data.GetAllNodesResponse.Nodes]
          })
        } else {
          this.setState({
            nodes: result.data.GetAllNodesResponse.Nodes
          })
        }
      })
      .catch((e) => {
        console.error('bb', e);
      })
  }

  componentWillUnmount () {
    socket.emit('disconnect_all');
    socket.removeAllListeners("subscription_result");
  }

  onLayoutChange = (layout, layouts) => {
    // console.log('aaaa');
    // let tempArray = [];
    //
    // layout.map((entry, key) => {
    //   if (entry.minH === undefined) {
    //     tempArray.push(key);
    //   }
    // });
    //
    // if (tempArray.length) {
    //
    //   let tempObject = {};
    //   tempObject[this.state.breakpoint] = [];
    //
    //   layouts[this.state.breakpoint].map((entry) => {
    //     if (entry.minH === undefined) {
    //       entry.h = 15;
    //       entry.minH = 7;
    //     }
    //
    //     tempObject[this.state.breakpoint].push(entry);
    //   })
    //   // console.log('aaaa',  Object.assign({}, layouts, tempObject));
    //
    //   this.setState({
    //     layouts: Object.assign({}, layouts, tempObject)
    //   })
    // }

    this.setState({layouts: layouts}, () => {
      this.pageUpdate();
      console.log('aa', layouts)
    });
  }

  onBreakpointChange = (newBreakpoint, newCols) => {
    this.setState({breakpoint: newBreakpoint});
  }

  initialSubscribe = () => {
    let tasks = [];

    this.state.widgets.map((entry) => {
      if (entry.config.isSubscribe) {
        let task = (callback) => {
          let obj = {
            contextId: entry.contextId,
            machineId: entry.config.machineId,
            varId: entry.config.varId,
            tolleranceInterval: entry.config.tolleranceInterval || 200
          }

          axios.post('/rest/subscribe/create', Object.assign({}, obj, {session: window.sessionStorage.getItem("session")}))
            .then((result) => {
              socket.emit('subscribe', {contextId: entry.contextId, tolleranceInterval: parseInt(entry.config.tolleranceInterval || 200), session: window.sessionStorage.getItem("session")});
              callback();
            })
            .catch((e) => {
              console.error('bb', e);
            })
        }
        tasks.push(task);
      }
    });

    AsyncWaterfall(tasks, () => {
      console.log('done');
    })
  }

  findIndex = (array, contextId) => {
    let tempContextId = parseInt(contextId);
    let index = -1;

    array.map((entry, key) => {
      if (entry.contextId === tempContextId) {
        index = key;
      }
    })

    return index;
  }

  addWidget = () => {

    let tempIndex = 1;

    if (this.state.widgets && this.state.widgets.length) {
      this.state.widgets.map((entry) => {
        if (entry.contextId > tempIndex) {
          tempIndex = entry.contextId;
        }
      })
      tempIndex ++;
    }

    this.setState({
      widgets: [...this.state.widgets, {contextId: tempIndex, widgetType: this.state.widgetselect, value: '', config: {machineId: '', varId: '', tolleranceInterval: '', isSubscribe: false}, name: ''}]
    }, () => {
      this.pageUpdate();
    })
  }

  pageUpdate = () => {
    let tempString = window.btoa(JSON.stringify({widgets: this.state.widgets, layouts: this.state.layouts}));
    // let tempString = window.btoa(JSON.stringify(this.state.widgets));

    axios.post('/rest/page/update', {session: window.sessionStorage.getItem("session"), page: {Id: this.props.params.pageId, CreatorId: this.state.page.CreatorId, Title: this.state.page.Title, ConfigXML: tempString}})
      .then((result) => {

      })
      .catch((e) => {
        console.error('cc', e);
      })
  }

  subscribe = (obj) => {
    axios.post('/rest/subscribe/create', Object.assign({}, obj, {session: window.sessionStorage.getItem("session")}))
      .then((result) => {
        socket.emit('subscribe', {contextId: obj.contextId, tolleranceInterval: parseInt(obj.tolleranceInterval), session: window.sessionStorage.getItem("session")});
      })
      .catch((e) => {
        console.error('bb', e);
      })
  }

  readVariable = (obj) => {
    axios.post('/rest/subscribe/read', Object.assign({}, obj, {session: window.sessionStorage.getItem("session")}))
      .then((result) => {

        setTimeout(() => {

          let index = this.findIndex(this.state.widgets, obj.contextId);

          if (index !== -1) {
            this.setState({
              widgets: [
                ...this.state.widgets.slice(0, index),
                Object.assign({}, this.state.widgets[index], {
                  value: result.data.readVarSetResult.VarValues.VarValue,
                }),
                ...this.state.widgets.slice(index + 1)
              ]
            })
          }
        }, 200)
      })
      .catch((e) => {
        console.error('bb', e);
      })
  }

  deletePage = (index, contextId) => {
    this.setState({
      widgets: [
        ...this.state.widgets.slice(0, index),
        ...this.state.widgets.slice(index + 1)
      ]
    }, () => {
      axios.post('/rest/subscribe/remove', {session: window.sessionStorage.getItem("session"), contextId: contextId})
      this.pageUpdate();
    })
  }

  writeVariable = (obj) => {
    axios.post('/rest/subscribe/write', Object.assign({}, obj, {session: window.sessionStorage.getItem("session")}))
      .then((result) => {

        let index = this.findIndex(this.state.widgets, obj.contextId);

        if (index !== -1) {
          this.setState({
            widgets: [
              ...this.state.widgets.slice(0, index),
              Object.assign({}, this.state.widgets[index], {
                value: result.data.readVarSetResult.VarValues.VarValue
              }),
              ...this.state.widgets.slice(index + 1)
            ]
          })
        }
      })
      .catch((e) => {
        console.error('bb', e);
      })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleValueChange = (value, contextId) => {

    let index = this.findIndex(this.state.widgets, contextId);

    if (index !== -1) {
      this.setState({
        widgets: [
          ...this.state.widgets.slice(0, index),
          Object.assign({}, this.state.widgets[index], {
            value: value
          }),
          ...this.state.widgets.slice(index + 1)
        ]
      })
    }
  }

  setConfig = (config, contextId) => {

    let index = this.findIndex(this.state.widgets, contextId);

    if (index !== -1) {
      this.setState({
        widgets: [
          ...this.state.widgets.slice(0, index),
          Object.assign({}, this.state.widgets[index], {
            config: config
          }),
          ...this.state.widgets.slice(index + 1)
        ]
      })
    }
  }

  setTitle = (title, contextId) => {

    let index = this.findIndex(this.state.widgets, contextId);

    if (index !== -1) {
      this.setState({
        widgets: [
          ...this.state.widgets.slice(0, index),
          Object.assign({}, this.state.widgets[index], {
            title: title
          }),
          ...this.state.widgets.slice(index + 1)
        ]
      }, () => {
        this.pageUpdate();
      })
    }
  }

  logoutHandler = () => {
    axios.post('/rest/auth/logout', {session: window.sessionStorage.getItem("session")}).then((result) => {
      window.sessionStorage.setItem("session", "");
      window.sessionStorage.setItem("sessionType", "");
      this.context.router.push('/')
    }).catch((e) => {})
  }

  render() {
    return (
      <main>
        <page-top>
          <div className="page-top clearfix">
            <a href="/" className="al-logo clearfix">
              <span>Ever</span>
              Green
            </a>
            <div style={{
                marginLeft: '25px',
                color: '#ffffff',
                fontSize: '24px',
                whiteSpace: 'nowrap',
                float: 'left',
                lineHeight: '60px'}}>
              <span>{this.state.username}</span>
            </div>
            <div className="logoutWrapper">
              <a href onClick={this.logoutHandler}>Logout</a>
            </div>
            <div className="page-top-search">
              <div className="input-group">
                <select name="widgetselect" className="form-control" onChange={this.handleInputChange}>
                  <option value="graph">Graph</option>
                  <option value="toggle">Toggle Button</option>
                  <option value="lamp">LED</option>
                  <option value="inputfield">Inputfield</option>
                  <option value="outputfield">Outputfield</option>
                </select>
                <span className="input-group-btn">
                  <button className="btn btn-primary stand-still" onClick={this.addWidget}  type="button">Add Widget</button>
                </span>
              </div>
            </div>
          </div>
        </page-top>
        <div className="al-main">
          <div className="al-content">
            <content-top>
              <div className="content-top clearfix">
                <h1 className="al-title ng-binding">{this.state.page.Title}</h1>
              </div>
            </content-top>
            <div>
              <div className="widgets">
                {/* <pre>
                  {JSON.stringify(this.state, false, 2)}
                </pre> */}
                <ResponsiveReactGridLayout className="layout" layouts={this.state.layouts}
                  breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                  useCSSTransforms={true}
                  onLayoutChange={this.onLayoutChange}
                  onBreakpointChange={this.onBreakpointChange}
                  rowHeight={30}
                  autoSize={true}
                  cols={{lg: 3, md: 3, sm: 2, xs: 1, xxs: 1}}>
                  {this.state.widgets && this.state.widgets.map((entry, key) => {
                    return (
                      <div key={entry.contextId} data-grid={this.state.grid}>
                        <Widget
                          key={entry.contextId}
                          id={entry.contextId}
                          keyindex={key}
                          subscribe={this.subscribe}
                          valueChange={this.handleValueChange}
                          readVariable={this.readVariable}
                          writeVariable={this.writeVariable}
                          widgetType={entry.widgetType}
                          names={this.state.names}
                          nodes={this.state.nodes}
                          value={entry.value}
                          config={entry.config}
                          setConfig={this.setConfig}
                          pageUpdate={this.pageUpdate}
                          delete={this.deletePage}
                          setTitle={this.setTitle}
                          title={entry.title}
                        />
                      </div>
                    )
                  })}
                </ResponsiveReactGridLayout>
                {/* <div className="row">
                  {this.state.widgets && this.state.widgets.map((entry, key) => {
                    return (
                      <Widget
                        key={entry.contextId}
                        id={entry.contextId}
                        keyindex={key}
                        subscribe={this.subscribe}
                        valueChange={this.handleValueChange}
                        readVariable={this.readVariable}
                        writeVariable={this.writeVariable}
                        widgetType={entry.widgetType}
                        names={this.state.names}
                        nodes={this.state.nodes}
                        value={entry.value}
                        config={entry.config}
                        setConfig={this.setConfig}
                        pageUpdate={this.pageUpdate}
                        delete={this.deletePage}
                        setTitle={this.setTitle}
                        title={entry.title}
                      />
                    )
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    )

    // return (
    //   <div>
    //     <div className="top-bar">
    //       <div className="top-bar-left">
    //         <ul className="menu">
    //           <li className="menu-text">Username</li>
    //           <li>
    //             <a onClick={this.logoutHandler}>Logout</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="top-bar-right">
    //         <form>
    //           <ul className="menu">
    //             <li>
    //               <select name="widgetselect" onChange={this.handleInputChange}>
    //                 <option value="graph">Graph</option>
    //                 <option value="toggle">Toggle Button</option>
    //                 <option value="lamp">LED</option>
    //                 <option value="inputfield">Inputfield</option>
    //                 <option value="outputfield">Outputfield</option>
    //               </select>
    //             </li>
    //             <li>
    //               <input type="button" className="button" onClick={this.addWidget} value="Add Widget"/>
    //             </li>
    //           </ul>
    //         </form>
    //       </div>
    //     </div>
    //     <div className="flex-container">
    //       {/* <pre>{JSON.stringify(this.state, false, 2)}</pre> */}
    //       {this.state.widgets && this.state.widgets.map((entry, key) => {
    //         return (
    //           <Widget
    //             key={entry.contextId}
    //             id={entry.contextId}
    //             keyindex={key}
    //             subscribe={this.subscribe}
    //             valueChange={this.handleValueChange}
    //             readVariable={this.readVariable}
    //             writeVariable={this.writeVariable}
    //             widgetType={entry.widgetType}
    //             names={this.state.names}
    //             nodes={this.state.nodes}
    //             value={entry.value}
    //             config={entry.config}
    //             setConfig={this.setConfig}
    //             pageUpdate={this.pageUpdate}
    //             delete={this.deletePage}
    //             setTitle={this.setTitle}
    //             title={entry.title}
    //           />
    //         )
    //       })
    //       }
    //     </div>
    //   </div>
    //
    // );
  }
}

newPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default newPage;
