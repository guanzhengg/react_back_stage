import React from 'react';
//路由库
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import routers from './config/routes'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <Router>
                <p>app</p>
                <Switch>
                    {
                        routers.map( (router,index)=>{
                           return <Route {...router} key={index}/>
                            })
                    }

                </Switch>
            </Router>
        );
    };

};