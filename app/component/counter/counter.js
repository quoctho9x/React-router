/**
 * Created by quoctho.nguyen on 26/4/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.counter}
            </div>
        )
    }
}