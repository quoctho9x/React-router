// ./src/car/car.component.jsx
import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import Popup from './popup';

var list;
class Car extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the Cars Page in car.component</h3>
                <List items={this.props.route.data }/>
            </div>
        )
    }
}

class Addnode extends Component {
    constructor(props) {
        super(props)
        this.addnode = this.addnode.bind(this);
    }

    addnode() {
        //truyen kieu du lieu va ca list qua cho popup
        ReactDOM.render(<Popup type={'new'} list={list}/>, document.getElementById('addnode'))
    }
    render() {
        return (
            <div className="wrap__btn">
                <a href="#" className="btn btn-info btn__add" onClick={this.addnode}>+</a>
            </div>
        )
    }
}

class Delete extends Component {
    constructor(props) {
        super(props)
        this.deletenode = this.deletenode.bind(this);
    }

    deletenode() {
        var arr = list.state.cars;
        var Idemove = this.props.nodeID;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == Idemove) {
                arr.splice(i, 1);  //removes 1 element at position i
                list.setState(list.state.cars);
                ReactDOM.render(<Popup type={'remove'} list={list} />, document.getElementById('addnode'))
                break;
            }
        }
    }

    render() {
        return (
            <div className="wrap__btn">
                <button className="btn btn-danger" onClick={this.deletenode}>Delete</button>
            </div>
        )
    }
}
class Edit extends Component {
    constructor(props) {
        super(props)
        this.editNode = this.editNode.bind(this);
    }

    editNode() {
        ReactDOM.render(<Popup type={'edit'} list={list} nodeID={this.props.nodeID}/>, document.getElementById('addnode'))
    }

    render() {
        return (
            <div className="wrap__btn">
                <button className="btn btn-info" onClick={this.editNode}>Edit</button>
            </div>
        )
    }
}
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {searchString: '', cars: []}
        list = this;
        this.componentWillMount = this.componentWillMount.bind(this);

    }

    componentWillMount() {
        this.state.cars = this.props.items
        this.setState(this.state);
    }

    handleChange(e) {
        this.setState({searchString: e.target.value})
    }

    render() {
        // Get data from Car items
        var cars = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();
        // Map through cars and return linked cars

        if (searchString.length > 0) {
            this.state.cars = this.state.cars.filter(function (list) {
                return list.name.toLowerCase().match(searchString);
            })
        }
        else {
            this.state.cars = this.props.items;
            // this.setState(this.state.cars);
        }
        return (
            <div>
                <div >
                    <input type="text" value={this.state.searchString} className="text_box search-car"
                           onChange={this.handleChange.bind(this)} placeholder="Type here"/>
                    <Addnode />
                </div>


                <div id="addnode"></div>
                <div className="items clearfix">
                    {
                        this.state.cars.map((car) => {
                            return (
                                <div className="list__group">
                                    <div className="col-md-6">
                                        <div className="wrap_item">

                                            <IndexLink
                                                activeClassName='active'
                                                to={"/cars/" + car.id}
                                                className="item"
                                                key={car.id.toString()}>
                                                <img src={car.media} className="image_item" alt="image"/>
                                            </IndexLink>
                                            <div className="des__img">
                                                <div className="name__item">
                                                    {car.name}
                                                </div>
                                                <Delete nodeID={car.id}/>
                                                <Edit nodeID={car.id}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


export default Car