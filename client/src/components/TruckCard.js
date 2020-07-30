import React from 'react';


const TruckCard = (props) => {

    console.log('card props', props)

    return(
        <div className='truck-card-container'>
            <div className='truck-card-container__img-container'>
                <img className='img-container__img' src={props.truck.image} alt={props.truck.name} />
            </div>
            <h2 className='truck-card-container__name'>{props.truck.name}</h2>
            <h3 className='truck-card-container__category'>{props.truck.cuisine_type}</h3>       
        </div>
    )
};

export default TruckCard;