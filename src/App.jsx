import React from 'react';
//路由库
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from "./components/home";
import Login from "./components/login";

export default class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <Router>
                <p>app</p>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </Router>
        );
    };

};