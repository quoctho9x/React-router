import React, {Component} from 'react'

class NamedComponents extends Component {
    render() {
        return (
            <div>
                {this.props.title}<br />
            </div>
        )
    }
}

export default NamedComponents

