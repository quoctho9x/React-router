import React, {Component} from 'react'

class Order extends Component {
    render() {
        return (
            <div>
                {this.props.title}<br />
                <ServiceChooser items={ services }/>
            </div>
        )
    }
}
// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.


var ServiceChooser = React.createClass({

    getInitialState: function () {
        return {total: 0};
    },

    addTotal: function (price) {
        this.setState({total: this.state.total + price});
    },

    render: function () {
        var self = this;
        var services = this.props.items.map(function (s, index) {
            // Create a new Service component for each item in the items array.
            // Notice that I pass the self.addTotal function to the component.
            return <Service key={index} name={s.name} price={s.price} active={s.active} addTotal={self.addTotal}/>;
        });

        return <div>
            <h1>Our services</h1>
            <div id="services">
                {services}
                <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
            </div>
        </div>;
    }
});

var Service = React.createClass({
    getInitialState: function () {
        return {active: false};
    },

    clickHandler: function () {
        var active = !this.state.active;
        this.setState({active: active});
        // Notify the ServiceChooser, by calling its addTotal method
        this.props.addTotal(active ? this.props.price : -this.props.price);
    },

    render: function () {
        return <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                    {this.props.name}
                    <b>${this.props.price.toFixed(2)}</b>
               </p>;
    }

});


var services = [
    {name: 'Web Development', price: 300},
    {name: 'Web Front-end', price: 350},
    {name: 'Web Back-end', price: 500},
    {name: 'Design', price: 400},
    {name: 'Integration', price: 250},
    {name: 'Training', price: 220}
];

export default Order

