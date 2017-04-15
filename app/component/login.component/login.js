import React, {Component} from 'react'
import { browserHistory } from 'react-router';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={name:'',password:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleRedirect(){
        browserHistory.push('/');
    }
    handleSubmit(){

        if(this.state.name === 'admin'){
            alert(this.state.name +"<br/> "+this.state.password);
        }
    }
    handleChange(e) {
        this.setState({name: e.target.value});
    }
    handleChange2(e) {
        this.setState({password: e.target.value});
    }
    render() {
        return(
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <h2 className="text-center">Log In</h2>
                    <form onSubmit={this.handleSubmit} >
                        <fieldset className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="text"  value={this.state.name} onChange={this.handleChange} placeholder="Email" />
                            {/*<Field name="email" component="input" className="form-control" type="text" placeholder="Email"/>*/}
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" value={this.state.password} onChange={this.handleChange2} placeholder="Password"/>
                           {/* <Field name="password" component="input" className="form-control" type="password" placeholder="Password"/>*/}
                        </fieldset>

                        <button action="submit" className="btn btn-primary" onClick={this.handleRedirect.bind(this)}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;