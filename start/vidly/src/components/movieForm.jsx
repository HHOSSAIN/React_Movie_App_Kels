import React from 'react';

const movieForm = ({match, history}) => {
  //const {match, history} = this.props; //don't know why "match" was not getting extracted like this...LEARN
  return (
    <div>
        <h1>movieForm {match.params.id}</h1>
        <button className='btn btn-primary' onClick={() => history.push("/movies")}>
          Save
        </button>
    </div>
  )
}

export default movieForm