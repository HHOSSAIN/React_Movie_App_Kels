import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state = { 
        account:{
            username: "",
            password: ""
        }
     }

    username = React.createRef();

    componentDidMount(){
        //this.username.current.focus();
    }

    handleChange = (e) =>{
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        //call the server, save the change and then redirect to a different page
        //username.current working here because of "ref"
        const username = this.username.current.value;
        console.log("Submitted");
    }

    render() { 
        return (
            <div>
                <h1>LoginForm</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name = "username"
                        value={this.state.account.username}
                        label= "username"
                        onChange ={this.handleChange}
                        //ref={this.username} 
                    >
                    </Input>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            value={this.state.account.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1">
                        </input>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}
 
export default LoginForm;
