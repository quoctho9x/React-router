import React, {Component} from 'react'
//react dom khong can o day
import TrackList from '../tracklist.component/index';
import Counter from '../counter/container';
import {configureStore} from '../../store';
import * as actions from '../../redux/action';
import {Provider} from 'react-redux';
import Popup from '../tracklist.component/container.popup';

//Provider giúp cho chúng ta có thể truy cập store cũng như tất cả những function của nó ở tất cả các component con
//khoi tao bien
const tracks = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'How to learn', content: 'read document about react'},
    {id: 3, title: 'what is first', content: 'start with Component, state, props...'},
    {id: 4, title: 'Installation', content: 'You can install React from npm.'}
];
//khoi tao store
const store = configureStore();
//store.dispatch(actions.setTracks(tracks));


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {bien: 'toggle', date: new Date(), isToggleOn: true};

        this.componentDidMount = this.componentDidMount.bind(this);
        /*  this.componentWillUnmount = this.componentWillUnmount.bind(this);
         this.tick = this.tick.bind(this);
         this.update = this.update.bind(this);*/
    }

    componentDidMount() {
        store.dispatch(actions.setTracks(tracks));
    }

    render() {
        return (
            <div>
                <h1>Hello Home page!</h1>
                <Provider store={store}>
                    <div>

                        <div className="wrap-input-group">
                            <div className="input-group">
                                <input type="text" className="form-control" ref="name" placeholder="insert note please"/>
                                <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button" onClick={() => {store.dispatch(actions.addList(this.refs.name.value));this.refs.name.value="";}} >Add List</button>
                            </span>
                            </div>
                        </div>
                        <TrackList />
                        <Popup type={'edit'}/>
                    </div>

                </Provider>

            </div>
        )
    }
}

export default Home

