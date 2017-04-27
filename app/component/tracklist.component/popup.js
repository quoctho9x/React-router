import React, {Component, PropTypes} from 'react';
import * as actions from '../../redux/action';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }
    componentWillReceiveProps() {
        console.log(this.props);
    }
    close() {
        document.getElementById('popup').style.display = 'none';
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
                                <label className="control-label col-sm-4">ID:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="media"  value=''  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" >Title:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="title"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4 ">Context:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"  ref="context" />
                                </div>
                            </div>

                            <div className="form-group">
                            <div className="col-sm-6">
                                <input type="button" className="btn btn-primary" value="Save"  onClick={() => {this.props.dispatch(actions.editID('1'));}} />
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