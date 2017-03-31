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
                <IndexLink activeClassName='active' to='/'>Home</IndexLink >&nbsp;
                <IndexLink activeClassName='active' to='/address'>Address</IndexLink >&nbsp;
                <IndexLink activeClassName='active' to='/about'>About</IndexLink >&nbsp;
                <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>
            </div>
        )
    }
}
export default Container

