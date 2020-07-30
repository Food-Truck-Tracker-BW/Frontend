import React from 'react';

function ItemDescription(props) {
  
  console.log('desc props:', props)

  return (
    <div>
      <p className="truck-location">{props.location}</p>
      <p className="truck-location">{props.departure}</p>
    </div>
  );
}

export default ItemDescription;