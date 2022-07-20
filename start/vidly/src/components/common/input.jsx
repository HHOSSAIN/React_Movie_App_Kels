import React, { Component } from 'react';

const Input = ({name, label, value, onChange}) => {

  return (
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input
            value={value}
            onChange={onChange}
            name={name}
            id={name}
            //ref={this.username} 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp">
        </input>
    </div>
  )
}

export default Input;