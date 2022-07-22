import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Card from './common/ipdb/Card';
import Config from './common/ipdb/Config';
import Templates from './common/ipdb/Templates';

class Ipdb extends Component {
    state = {  } 

    

    render() { 

        //const navigate = useNavigate();

        var printer = () =>{
            console.log("working");
        } 

        var handleCallList = (event) =>{
            event.stopPropagation();
            console.log("go to list");
            //navigate("/template");
            this.props.history.push("/template")
        }

        return (
            <div>
                <h1>Hi</h1>
                
                
                <div
                    className="grid-container gridContainer"
                    style={{
                    display: "grid",
                    marginLeft: "25px",
                    gridTemplateColumns: "1fr 2fr 2fr",
                    gridColumnGap: "10px",
                    gridRowGap: "20px",
                    }}
                >
                    <div></div>
                    <div onClick={printer} style={{cursor:"pointer"}}>
                    <Card callList={handleCallList}  name="Template" path="template"></Card>
                    </div>
                    <Card name="Configuration" path="config"></Card>   
                   
                    
                </div>
            </div>
        );
    }
}
 
export default Ipdb;