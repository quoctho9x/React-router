import {Data} from './component/data'
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory,IndexLink,Redirect} from 'react-router'

import Container from './component/Container'
import NotFound from './component/NotFound';
import Home from './component/Home';
import Order from './component/Order';
import Title from './component/Title';
import About from './component/About';
import Login from './component/Login';
import Car from './component/Car';
import CarDetail from './component/CarDetail';
import {Address, Instagram, TwitterFeed, Query}  from './component/Address';


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
/*const data = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Mercedes-Benz AMG GT Coupe',
        year: '2016',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

    },
    {
        id: 3,
        name: 'BMW X6 SUV',
        year: '2016',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
    },
    {
        id: 4,
        name: 'Ford Edge SUV',
        year: '2016',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
    },
    {
        id: 5,
        name: 'Dodge Viper Coupe',
        year: '2017',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
    }
];*/

export default App