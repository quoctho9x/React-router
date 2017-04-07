// ./src/car/car.component.jsx
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

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


class List extends Component {
    constructor(props){
        super(props)
        this.state={searchString:''}
    }
    handleChange(e){
        this.setState({searchString:e.target.value})
    }

    render(){
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

        if(searchString.length > 0){
            cars = cars.filter(function (list) {
                return list.name.toLowerCase().match(searchString);
            })
        }
        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Type here"/>
                <div className="list-group">
                  {/*  {carNode}*/}
                    {
                        cars.map((car) => {
                        return (
                            <IndexLink
                                activeClassName='active'
                                to={"/cars/"+car.id}
                                className="list-group-item"
                                key={car.id}>
                                {car.name}
                            </IndexLink>
                                )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Car