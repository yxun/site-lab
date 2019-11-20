import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Home, Doc, Example } from "./Pages";


class App extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/docs">Doc</NavLink></li>
                    <li><NavLink to="/examples">Example</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/docs" component={Doc} />
                    <Route path="/examples" component={Example} />
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default App;
