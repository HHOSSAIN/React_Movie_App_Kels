import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CorptForm extends React.Component {
    render() { 
        return (
        <div>
        <h1>Form</h1>
            
        <h2 className="col">Template Management</h2>
    
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div className="container card">
        <h5 class="card-header">Template Management</h5>
        <div className="card-body">
        <div className="row">
            <label className="col">
            Configuration Type:
            <select className="col-sm">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <label className="col">
            Network:
            <select className="col-sm border-left" >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <label className="col">
            Layer:
            <select className="col-sm">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
        </div>

        <br></br>
  
        <div className="row">
            <label className="col">
            Service Type:
            <select className="col-sm">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <label className="col">
            Customers:
            <select className="col-sm border-left" >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>    
        </div>

        <br></br>

        <div className="row">
            <label className="col">
            Vendor:
            <select className="col-sm">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <label className="col">
            Model:
            <select className="col-sm border-left" >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
        </div>

        <br></br>
    
        <div className="row col">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <br></br>
        <div className="row col">
            <label htmlFor="exampleInputTemplate">Template</label>
            <textarea className="form-control" id="exampleInputTemplate" aria-describedby="emailHelp" rows="3" placeholder="What's up?" required></textarea>
        </div>

        <br></br>
        <div className="col-md-12 text-right">
        <button className="btn btn-primary">Back</button>
        <button className="btn btn-primary">Insert</button>
        </div>

        </div>
      
  </div>
</div>
  
        );
    }
}
 
export default CorptForm;