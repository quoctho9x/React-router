import React, {Component} from 'react'
//react dom khong can o day
import TrackList from '../tracklist.component/index';
import {configureStore} from '../../store';
import * as actions from '../../action';
import {Provider} from 'react-redux';

//Provider giúp cho chúng ta có thể truy cập store cũng như tất cả những function của nó ở tất cả các component con
//khoi tao bien
const tracks = [
    {id: 1, title: '1 Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: '2 How to learn', content: 'read document about react'},
    {id: 3, title: '3 what is first', content: 'start with Component, state, props...'},
    {id: 4, title: '4 Installation', content: 'You can install React from npm.'}
];
//khoi tao store
const store = configureStore();
//store.dispatch(actions.setTracks(tracks));



class Home extends Component {
   /* constructor(props) {
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

    }*/

    render() {
        return (
            <div>
                <h1>Hello Home page!</h1>
                /*them redux vao day nhe*/
                <Provider store={store}>
                    <div>
                        <input type="button" onClick={() => {store.dispatch(actions.setTracks(tracks));store.dispatch(actions.increaseCounter());}} value={'Show List'}/>
                        <TrackList  />
                    </div>

                </Provider>
               {/* <h2>Timer {this.state.date.toLocaleTimeString()}</h2>
                <Child bien={this.state.bien}/>
                <Button update={this.update} value={this.state.isToggleOn ? 'Show list' : 'hide list'}/>
                <div>
                    <h2>demo list</h2>
                    <Blog posts={posts}/>
                </div>
*/}
            </div>
        )
    }
}
/*
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

/!*demo list*!/
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
            {/!* {sidebar}*!/}
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
];*/
export default Home

