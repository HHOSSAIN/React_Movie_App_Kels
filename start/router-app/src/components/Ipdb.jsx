import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Card from './common/ipdb/Card';
import Config from './common/ipdb/Config';
import Templates from './common/ipdb/Templates';

class Ipdb extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Hi</h1>
                
                
                <div
                    className="grid-container gridContainer"
                    style={{
                    display: "grid",
                    marginLeft: "25px",
                    gridTemplateColumns: "1fr 1fr",
                    gridColumnGap: "30px",
                    gridRowGap: "20px",
                    }}
                >
                    <Card name="Template" path="template"></Card>
                    <Card name="Configuration" path="config"></Card>   
                    <Route path="/ipdb/template" component={Templates}></Route>
                    <Route path="/ipdb/config" component={Config}></Route>
                </div>
            </div>
        );
    }
}
 
export default Ipdb;