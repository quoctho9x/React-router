// ./src/car/car.component.jsx
import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
var list;
class Car extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the Cars Page</h3>
                <List items={this.props.route.data }/>
            </div>
        )
    }
}
class FormAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {obj: {}}
    }

    send() {
        var last_child = list.state.cars[list.state.cars.length - 1];
        var objnew = {};
        if (this.refs.media.value) {
            objnew.id = last_child.id + 1;
            objnew.media = this.refs.media.value;
            objnew.name = (this.refs.name.value.length > 0) ? this.refs.name.value : 'no name';
            objnew.year = '';
            objnew.model = '';
            objnew.make = '';
            objnew.price = '';
            list.state.cars.push(objnew);
            list.setState(list.state.cars);

            ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
        }
        else {
            alert('xin nhap media');
            return false
        }
    }

    render() {
        return (
            <div>
                <form>
                    media: <input type="text" ref="media" placeholder="media"/><br/>
                    Name: <input type="text" ref="name" placeholder="name"/><br/>
                    {/* Year: <input type="text" placeholder="year"/><br/>
                     Model: <input type="text" placeholder="model"/><br/>
                     Make: <input type="text" placeholder="make"/><br/>
                     Price: <input type="text" placeholder="price"/><br/>*/}
                    <input type="button" value="Submit" onClick={this.send.bind(this)}/>
                </form>
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
        ReactDOM.render(<FormAdd />, document.getElementById('addnode'))
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
        this.editnode = this.editnode.bind(this);
    }

    editnode() {
        var arr = list.state.cars;
        var IdInsert = this.props.nodeID;
        var objnew = {};
        objnew.id = this.props.nodeID;
        objnew.media = '';
        objnew.name = 'add new';
        objnew.year = '';
        objnew.model = '';
        objnew.make = '';
        objnew.price = '';
        //ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == IdInsert) {
                arr.splice(i, 1, objnew);  //removes 1 element at position i
                list.setState(list.state.cars);
                break;
            }
        }
    }

    render() {
        return (
            <div className="wrap__btn">
                <button className="btn btn-info" onClick={this.editnode}>Edit</button>
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
        /*const carNode = cars.map((car) => {
         return (
         <IndexLink
         activeClassName='active'
         to={"/cars/"+car.id}
         className="list-group-item"
         key={car.id}>
         {car.name}
         </IndexLink>
         )
         });*/

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
                    {/*  {carNode}*/}
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
                                                <div className="des__img">
                                                    <div className="name__item">
                                                        {car.name}
                                                    </div>
                                                    <Delete nodeID={car.id}/>
                                                    <Edit nodeID={car.id}/>
                                                </div>
                                            </IndexLink>

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