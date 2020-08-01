import React from 'react';

function ItemDescription(props) {
  
  console.log('desc props:', props)

  return (
    <div className='about-us-container'>
      <div className='location-container'>
        <span>Location: </span>
        <p className="truck-location">{props.location}</p>
      </div>
      
      <div className='location-container'>
        <span>Departure Time: </span>
        <p className="truck-location">{props.departure}</p>
      </div>
    </div>
  );
}

export default ItemDescription;