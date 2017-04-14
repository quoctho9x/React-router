import React, {Component} from 'react';
class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {obj: {}}
    }

    render() {
        return (
            <div id="popup" className="overlay">
                <div className="popup">
                    <h2>Here i am</h2>
                    <a className="close" onClick={this.close.bind(this)}>&times;</a>
                    <div className="content">
                        media: <input type="text" ref="media" placeholder="media"/><br/>
                        Name: <input type="text" ref="name" placeholder="name"/><br/>
                        Year: <input type="text" ref="year" placeholder="year"/><br/>
                        Model: <input type="text" ref="model" placeholder="model"/><br/>
                        Make: <input type="text" ref="make" placeholder="make"/><br/>
                        Price: <input type="text" ref="price" placeholder="price"/><br/>
                        <input type="button" value="Submit" onClick={this.send.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup