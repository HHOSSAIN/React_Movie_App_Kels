import React, { Component } from 'react';
import Input from './common/input';
import Joi from "joi-browser";
import Form from './common/form';

//class LoginForm extends Component {
class LoginForm extends Form {
    state = { 
        //account:{
        data:{
            username: "",
            password: ""
        },
        errors: {
        }
     }

     schema = {
        username: Joi.string().required().label("Username"), //to uppercase error message
        password: Joi.string().required(),
     }

    //username = React.createRef();

    
    componentDidMount(){
        //this.username.current.focus();
    }

    /*handleChange = (e) =>{

        //dealing with the error
        const errors = {...this.state.errors}; //creating a new obj with old data
        const errorMessage = this.validateProperty(e.currentTarget);
        if(errorMessage){
            errors[e.currentTarget.name] = errorMessage;
            
        }
        else{
            delete errors[e.currentTarget.name];
        }
        //this.setState({errors}); //niche eta implement korsi

        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account, errors});
    } */

    /*validateProperty = (input) =>{
        const obj = { [input.name] : input.value};
        const schema = { [input.name] : this.schema[input.name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null; */
        //witjout joi
        /*if(input.name == "username"){
            if(input.value.trim() === ""){
                return "Username is required";
            }
        }
        if(input.name == "password"){
            if(input.value.trim() === ""){
                return "Password is required";
            }
        } */
    //}
    

    /*handleSubmit = (e) =>{
        e.preventDefault();

        //call the server, save the change and then redirect to a different page
        //username.current working here because of "ref"
        //const username = this.username.current.value;
        //console.log("Submitted");

        const errors = this.validate(); //we defined this method above
        console.log(errors);
        //this.setState({errors}); //this is giving error when null
        this.setState({errors: errors || {}}); //solution is this...value in an an attribute from "state" is not allowed to be null
        if(errors){
            return;
        }
    } */

    doSubmit = () =>{
        //call the server, save the change and then redirect to a different page
        //username.current working here because of "ref"
        //const username = this.username.current.value;
        console.log("Submitted");

    }

    render() { 
        //const {account, errors} = this.state;
        const {data, errors} = this.state;

        return (
            <div>
                <h1>LoginForm</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name = "username"
                        //value={this.state.account.username}
                        value={this.state.data.username}
                        label= "Username"
                        onChange ={this.handleChange}
                        //ref={this.username} 
                        error = {this.state.errors.username}
                    >
                    </Input>
                    <Input 
                        name = "password"
                        //value={this.state.account.password}
                        value={this.state.data.password}
                        label= "Password"
                        onChange ={this.handleChange}
                        //ref={this.username} 
                        error = {this.state.errors.password}
                    >
                    </Input>
                    
                    <button disabled={this.validate()} type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}
 
export default LoginForm;
