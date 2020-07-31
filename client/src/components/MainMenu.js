import React, { useState, useEffect } from 'react';
import * as actions from '../actions/index'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';

const MainMenu = (props) => {

    const { id } = useParams();
    const [ isLoaded, setIsLoaded ] = useState(false);

// * useEffect send dispatch to set the selected truck menue to state in store 
  useEffect(() => {
    props.getMenus(id)
  }, [])

  // * useEffect dependent on the updating of selected truck state to render 
  // * component conditrionally
  useEffect(() => {
    if (props.menu) setIsLoaded(true);
  }, [props.menu])

    

    return (
        <div>
            {isLoaded
                ? 
                ( <div className='menu-container'> 
                {props.menu.map((item) => {
                    return (
                        <div className='menu-container__item-container' key={item.id}>
                            <h1 className='item-container__food-name'>{item.item_name}</h1>
                            <img 
                                className='item-container__img' 
                                src={item.item_image} 
                                alt={item.id} 
                            />
                            <p className='item-container__description'>{item.item_description}</p>
                            <h1 className='item-container__price'>{item.item_price}</h1>
                        </div>
                    )
                })}
                </div> )
                : ( <div>Getting Menu</div> ) 
            }
        </div>
    )
};

// export default MainMenu;

const mapStateToProps = state => ({ menu: state.menu });

export default connect(mapStateToProps, actions)(MainMenu)

