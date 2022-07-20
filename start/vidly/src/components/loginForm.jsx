import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state = { 
        account:{
            username: "",
            password: ""
        },
        errors: {
        }
     }

    //username = React.createRef();

    validate = () =>{
        const errors = {}; 
        const {account} = this.state;

        //updating the errors attribute state
        if(account.username.trim() === ""){
            errors.username = "username is required";
        }
        if(account.password.trim() === ""){
            errors.password = "password is required";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

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
        //const username = this.username.current.value;
        console.log("Submitted");

        const errors = this.validate(); //we defined this method above
        console.log(errors);
        this.setState({errors}); //this is giving error when null
        if(errors){
            return;
        }
    }

    render() { 
        const {account, errors} = this.state;

        return (
            <div>
                <h1>LoginForm</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name = "username"
                        value={this.state.account.username}
                        label= "Username"
                        onChange ={this.handleChange}
                        //ref={this.username} 
                        error = {this.state.errors.username}
                    >
                    </Input>
                    <Input 
                        name = "password"
                        value={this.state.account.password}
                        label= "Password"
                        onChange ={this.handleChange}
                        //ref={this.username} 
                        error = {this.state.errors.password}
                    >
                    </Input>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}
 
export default LoginForm;
