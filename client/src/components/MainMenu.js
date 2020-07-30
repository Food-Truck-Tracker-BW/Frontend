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
                ? <h1>Main Menu</h1>
                : <div>Getting Menu</div>   
            }
        </div>
    )
};

// export default MainMenu;

const mapStateToProps = state => ({ selectedTruck: state.selectedTruck });

export default connect(mapStateToProps, actions)(MainMenu)

