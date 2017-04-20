import React, {Component} from 'react'

import TrackList from './components/TrackList';
import {configureStore} from './store';
import * as actions from './actions';

//khoi tao bien
const tracks = [
    {
        id: 1,
        title: 'Em của ngày hôm qua'
    },
    {
        id: 2,
        title: 'Cơn mưa ngang qua'
    }
];
//khoi tao store
const store = configureStore();
store.dispatch(actions.setTracks(tracks));//chua gan vao su kien nao cua view het <TrackList />

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {bien: 'toggle', date: new Date(), isToggleOn: true};

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.tick = this.tick.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    update() {
        this.setState(prevState => ({
            bien: 'toggle active',
            isToggleOn: !prevState.isToggleOn
        }));

    }

    render() {
        return (
            <div>
                <h1>Hello Home page!</h1>
                <h2>Timer {this.state.date.toLocaleTimeString()}</h2>
                <Child bien={this.state.bien}/>
                <Button update={this.update} value={this.state.isToggleOn ? 'Show list' : 'hide list'}/>
                <div>
                    <h2>demo list</h2>
                    <Blog posts={posts}/>
                </div>

            </div>
        )
    }
}

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input className="btn btn-default" onClick={this.props.update} type="button" value={this.props.value}/>
        )
    }
}
class Child extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span>Button {this.props.bien}: </span>
        )
    }
}

/*demo list*/
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {/* {sidebar}*/}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: '1 Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: '2 How to learn', content: 'read document about react'},
    {id: 3, title: '3 what is first', content: 'start with Component, state, props...'},
    {id: 4, title: '4 Installation', content: 'You can install React from npm.'}
];
export default Home

