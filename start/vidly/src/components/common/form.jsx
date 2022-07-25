import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    
    validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details){
         errors[item.path[0]] = item.message;
    }
    return errors;
    };

    validateProperty = (input) =>{
        const obj = { [input.name] : input.value};
        const schema = { [input.name] : this.schema[input.name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        //call the server, save the change and then redirect to a different page
        //username.current working here because of "ref"
        //const username = this.username.current.value;
        //console.log("Submitted");
        this.doSubmit(); //works coz we extend this class to a child class

        const errors = this.validate(); //we defined this method above
        console.log(errors);
        //this.setState({errors}); //this is giving error when null
        this.setState({errors: errors || {}}); //solution is this...value in an an attribute from "state" is not allowed to be null
        if(errors){
            return;
        }
    }

    handleChange = (e) =>{

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

        //const account = {...this.state.account};
        const data = {...this.state.data};
        //account[e.currentTarget.name] = e.currentTarget.value;
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data, errors});
    } 
}
 
export default Form;