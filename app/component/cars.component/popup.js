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
                        <h3>Create new item </h3>
                        <a className="close" onClick={this.close}>&times;</a>
                        <div className="content form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-2">media:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="media" placeholder="media" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="name" placeholder="name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Year:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  ref="year" placeholder="year"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">Model:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="model" placeholder="model" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Make:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="make" placeholder="make" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Price:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="price" placeholder="price" />
                                </div>
                            </div>
                            <input type="button" className="btn btn-default" value="Submit" onClick={this.addNewNode}/>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.props.type == 'edit') {
            return (
                <div id="popup" className="overlay">
                    <div className="popup">
                        <h3>Edit item </h3>
                        <a className="close" onClick={this.close}>&times;</a>
                        <div className="content form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-2">media:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="media"  value={this.state.objmedia}  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="name"  defaultValue={this.state.objname} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Year:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  ref="year" defaultValue={this.state.objyear}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">Model:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="model" defaultValue={this.state.objmodel}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Make:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="make" defaultValue={this.state.objmake} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Price:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref="price"defaultValue={this.state.objprice}/>
                                </div>
                            </div>
                            <div className="form-group">
                            <div className="col-sm-6">
                                <input type="button" className="btn btn-primary" value="Save" onClick={this.editNode} />
                            </div>
                            <div className="col-sm-6">
                                <input type="button" className="btn btn-danger" value="cancel" onClick={this.close} />
                            </div>
                            </div>


                        </div>

                    </div>
                </div>
            )
        }
        if (this.props.type == 'remove') {
            return (
                <div id="popup" className="overlay ">
                    <div className="popup">
                        <h2>this cars is remove</h2>
                        <a className="close" onClick={this.close}>&times;</a>
                    </div>
                </div>
            )
        }

    }
}

export default Popup