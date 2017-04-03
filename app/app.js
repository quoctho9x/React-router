import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory,IndexLink  } from 'react-router'

import Container from './component/Container'
import NotFound from './component/NotFound';
import Home from './component/Home';
import Order from './component/Order';
import Title from './component/Title';
import About from './component/About';
import {Address, Instagram, TwitterFeed, Query}  from './component/Address';


class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='/address' component={Address}>
                        <IndexRoute component={TwitterFeed} />
                        <Route path='instagram' component={Instagram} />
                        <Route path='query' component={Query} />
                    </Route>
                    <Route path='/about(/:name)' component={About} />
                    <Route path='/order' component={Order}>
                        <IndexRoute components={{ title: Title}} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}
export default App