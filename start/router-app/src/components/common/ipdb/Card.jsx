import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Card = ({name, path, callList}) => {  
  return (
    <div>
        <div className="card" style={{width: "18rem", backgroundColor: "#8acbde"}}>
            <div className="card-body">
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
                    <h5 className="card-title">{name}</h5>
                    
                    <button onClick={ (e) => callList(e)}>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card