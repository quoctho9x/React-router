import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the About Page</h3>
                { this.props.params.name && <h2>Hello, {this.props.params.name}</h2>}
            </div>
        )
    }
}

export default About

