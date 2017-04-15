import {Data} from './data/data'
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory,IndexLink,Redirect} from 'react-router'

import Container from './component/nav.component/container'
import NotFound from './component/404.component/notfound';
import Home from './component/orther.component/home';
import Order from './component/order.component/order';
import Title from './component/order.component/title';
import About from './component/orther.component/about';
import Login from './component/login.component/login';
import Car from './component/cars.component/car';
import CarDetail from './component/cars.component/cardetail';
import {Address, Instagram, TwitterFeed, Query}  from './component/orther.component/address';


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route  path='/' component={Container} >
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
                    <Route path='/login' component={Login} />
                    <Route path='/cars' component={Car} data={data} />
                    <Route path='/cars/:id' component={CarDetail} data={data}/>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

//get database
var  data = Data;


export default App