import React from "react";
import { Route, Link, useParams } from "react-router-dom";



import ItemDescription from "../components/truckDescription";
import MainMenu from './MainMenu';

// * action creators


function Item(props) {
  
  const {id} = useParams();

  // * used to find truck being clicked in 
  // const item = items.find(thing => `${props.trucks.id}` === match.params.id);

  // if (!item) {
  //   return <h2>Loading truck data...</h2>;
  // }
  console.log('item props', props)

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{props.name}</h2>
        </div>
      </div>

     <div className='item-wrapper__nav-buttons'>
        <Route exact path='/truck/:id'>
          <Link to={`/truck/${props.id}/description`}> 
            <button> About Us </button> 
          </Link>
        </Route>

        <Route exact path='/truck/:id'>
          <Link to={`/truck/${id}/menu`}>
            <button> See Menu </button>
          </Link>
        </Route>
      </div>

      <Route path={`/truck/${props.id}/description`} component={() => (
        <ItemDescription {...props} />
      )} />

      <Route path='/truck/:id/menu' component={MainMenu} />

    </div>
  );
}


export default Item;
// const mapStateToProps = state => ({ trucks: state.trucks });

// export default connect(mapStateToProps, actions)(Item)