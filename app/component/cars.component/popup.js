import React, {Component} from 'react';
import ReactDOM from 'react-dom';
var list;
class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {},
            type: {},
            objmedia: "", objname: "", objyear: "", objmodel: "", objmake: "", objprice: "",
        };
        this.addNewNode = this.addNewNode.bind(this);
        this.editNode = this.editNode.bind(this);
        this.close = this.close.bind(this);
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
        list = this.props.list;
        var arr = list.state.cars;
        var IdInsert = this.props.nodeID;
        var objnew = {};
        //get value of node edit insert popup
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == IdInsert) {
                objnew = arr[i];
                this.state.objmedia = objnew.media;
                this.state.objname = objnew.name;
                this.state.objyear = objnew.year;
                this.state.objmodel = objnew.model;
                this.state.objmake = objnew.make;
                this.state.objprice = objnew.price;

                //arr.splice(i, 1, objnew);  //removes 1 element at position i
                //list.setState(list.state.cars);
                this.setState(this.state);
                break;
            }
        }

        //list = this.props.list;
        this.setState({
            type: this.props.type
        });
    }

    addNewNode() {
        var last_child = list.state.cars[list.state.cars.length - 1];
        var objnew = {};
        if (this.refs.media.value) {
            objnew.id = last_child.id + 1;
            //objnew.media = this.refs.media.value ? this.refs.media.value :"http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg";
            objnew.media = "http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg";
            objnew.name = (this.refs.name.value.length > 0) ? this.refs.name.value : 'no name';
            objnew.year = (this.refs.year.value.length > 0) ? this.refs.year.value : 'nul';
            objnew.model = (this.refs.model.value.length > 0) ? this.refs.model.value : 'null';
            objnew.make = (this.refs.make.value.length > 0) ? this.refs.make.value : 'null';
            objnew.price = (this.refs.price.value.length > 0) ? this.refs.price.value : 'null';
            list.state.cars.unshift(objnew);
            list.setState(list.state.cars);

            ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
        }
        else {
            alert('xin nhap media');
            return false
        }
    }

    editNode() {
        var arr = list.state.cars;
        var IdInsert = this.props.nodeID;
        var objnew = {};
        //console.log(list.state.cars);
        // console.log(this.props.nodeID);

        /* objnew.id = this.props.nodeID;
         objnew.media = '';
         objnew.name = 'add new';
         objnew.year = '';
         objnew.model = '';
         objnew.make = '';
         objnew.price = '';*/
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == IdInsert) {
                objnew = arr[i];
                objnew.id = this.props.nodeID;
                // objnew.media = "http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg";
                objnew.name = (this.refs.name.value.length > 0) ? this.refs.name.value : 'no name';
                objnew.year = (this.refs.year.value.length > 0) ? this.refs.year.value : 'nul';
                objnew.model = (this.refs.model.value.length > 0) ? this.refs.model.value : 'null';
                objnew.make = (this.refs.make.value.length > 0) ? this.refs.make.value : 'null';
                objnew.price = (this.refs.price.value.length > 0) ? this.refs.price.value : 'null';


                arr.splice(i, 1, objnew);  //removes 1 element at position i
                list.setState(list.state.cars);
                break;
            }
        }
        //close popup when finish
        ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
    }


    close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
    }

    render() {
        if (this.props.type == 'new') {
            return (
                <div id="popup" className="overlay">
                    <div className="popup">
                        <h2>car.component add new item </h2>
                        <a className="close" onClick={this.close}>&times;</a>
                        <div className="content">
                            media: <input type="text" ref="media" placeholder="media"/><br/>
                            Name: <input type="text" ref="name" placeholder="name"/><br/>
                            Year: <input type="text" ref="year" placeholder="year"/><br/>
                            Model: <input type="text" ref="model" placeholder="model"/><br/>
                            Make: <input type="text" ref="make" placeholder="make"/><br/>
                            Price: <input type="text" ref="price" placeholder="price"/><br/>
                            <input type="button" value="Submit" onClick={this.addNewNode}/>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.props.type == 'edit') {
            return (
                <div id="popup" className="overlay">
                    <div className="popup">
                        <h2>car.component edit item </h2>
                        <a className="close" onClick={this.close}>&times;</a>
                        <div className="content">
                            media: <input type="text" value={this.state.objmedia} ref="media"/><br/>
                            Name: <input type="text" defaultValue={this.state.objname} ref="name"/><br/>
                            Year: <input type="text" defaultValue={this.state.objyear} ref="year"/><br/>
                            Model: <input type="text" defaultValue={this.state.objmodel} ref="model"/><br/>
                            Make: <input type="text" defaultValue={this.state.objmake} ref="make"/><br/>
                            Price: <input type="text" defaultValue={this.state.objprice} ref="price"/><br/>
                            <input type="button" value="Submit" onClick={this.editNode}/>
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
                        <a className="close" onClick={this.close}>&times;</a>
                    </div>
                </div>
            )
        }

    }
}

export default Popup