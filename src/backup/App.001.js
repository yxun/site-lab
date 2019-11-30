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
                    <li><NavLink exact to={process.env.PUBLIC_URL + "/"}>Home</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL + "/docs"}>Doc</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL + "/examples"}>Example</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                    <Route path={process.env.PUBLIC_URL + "/docs"} component={Doc} />
                    <Route path={process.env.PUBLIC_URL + "/examples"} component={Example} />
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default App;
