import React, { Component } from 'react';

const Input = ({name, label, value, onChange, error}) => {

  return (
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
        <input
            value={value}
            onChange={onChange}
            name={name}
            id={name}
            //ref={this.username} 
            //type="email" 
            className="form-control" 
            aria-describedby="emailHelp">
        </input>
        {error
         && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default Input;