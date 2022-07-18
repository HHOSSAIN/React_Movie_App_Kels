import React, { Component } from 'react';

class LoginForm extends Component {
    //state = {  } 
    username = React.createRef();

    componentDidMount(){
        this.username.current.focus();
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        //call the server, save the change and then redirect to a different page
        const username = this.username.current.value;
        console.log("Submitted");
    }

    render() { 
        return (
            <div>
                <h1>LoginForm</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={this.username} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
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
