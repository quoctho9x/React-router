import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {obj: {},type:{}}
        this.send=this.send.bind(this);
        this.close=this.close.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        this.setState({
            type: this.props.type
        });
        // console.log(this.state.type);
    }
    componentWillMount() {
        this.setState({
            type: this.props.type
        });
        //console.log(this.state.type);
    }
    send() {
        var last_child = list.state.cars[list.state.cars.length - 1];
        var objnew = {};
        if (this.refs.media.value) {
            objnew.id = last_child.id + 1;
            //objnew.media = this.refs.media.value ? this.refs.media.value :"http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg";
            objnew.media = "http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg";
            objnew.name = (this.refs.name.value.length > 0) ? this.refs.name.value : 'no name';
            objnew.year =  (this.refs.year.value.length > 0) ? this.refs.year.value : 'nul';
            objnew.model = (this.refs.model.value.length > 0) ? this.refs.model.value : 'null';
            objnew.make =  (this.refs.make.value.length > 0) ? this.refs.make.value : 'null';
            objnew.price =  (this.refs.price.value.length > 0) ? this.refs.price.value : 'null';
            list.state.cars.unshift(objnew);
            list.setState(list.state.cars);

            ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
        }
        else {
            alert('xin nhap media');
            return false
        }
    }
    close(){


        ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
    }

    render() {
        if(this.props.type =='new'){
            return (
                <div id="popup" className="overlay">
                    <div className="popup">
                        <h2>car.component add new item </h2>
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
        if(this.props.type =='edit') {
            return (
                <div id="popup" className="overlay">
                    <div className="popup">
                        <h2>car.component edit item </h2>
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
        else {
            return (
                <div id="popup" className="overlay">
                    <div className="popup">
                        <h2>pleas insert type</h2>
                        <a className="close" onClick={this.close.bind(this)}>&times;</a>
                    </div>
                </div>
            )
        }

    }
}

export default Popup