import React, {Component} from 'react'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink} from 'react-router'

class Container extends Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <div>
                {/*<IndexLink activeClassName='active' to='/'>Home</IndexLink >&nbsp;
                <IndexLink activeClassName='active' to='/address'>Address</IndexLink >&nbsp;
                <IndexLink activeClassName='active' to='/about'>About</IndexLink >&nbsp;
                <IndexLink activeClassName='active' to='/order'>Order</IndexLink>*/}


                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                               {/* <a className="navbar-brand" href="#">Scotch Cars</a>*/}
                                <IndexLink className="navbar-brand" activeClassName='active' to='/'>Home</IndexLink >
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                  {/*  <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>*/}
                                    <li><IndexLink activeClassName='active' to='/address'>Address</IndexLink ></li>
                                    <li>  <IndexLink activeClassName='active' to='/about'>About</IndexLink ></li>
                                    <li> <IndexLink activeClassName='active' to='/order'>Order</IndexLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

            </div>
        )
    }
}
export default Container

