import React, {Component} from 'react'
import {IndexLink} from 'react-router'
class Address extends Component {
    render() {
        return (
            <div>
                <br />
                {/* <IndexLink  activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;*/}
                <IndexLink activeClassName='active' to='/address/instagram'>Instagram Feed</IndexLink>&nbsp;
                <IndexLink activeClassName='active' to={{pathname: '/address/query', query: {message: 'Hello from Route Query'}}}>router query</IndexLink>&nbsp;
                <h1>We are located at 555 Jackson St.</h1>
                {this.props.children}
            </div>
        )
    }
}

const Instagram = () => <h3>this is default page address Instagram Feed </h3>
const TwitterFeed = () => <h3>Twitter Feed child of address</h3>
const Query = (props) => (
    <h2>show query: {props.location.query.message}</h2>
)
export  {Address, Instagram, TwitterFeed, Query}