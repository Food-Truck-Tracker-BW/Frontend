import React from "react";
import { Route, Link } from "react-router-dom";


import ItemDescription from "../components/truckDescription";

// * action creators


function Item(props) {
  
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
      <Link to={`/item-list/${props.id}`}>
        <Route path={`/item-list/${props.id}`} component={ItemDescription}>
          About Us
        </Route>
      </Link>
    </div>
  );
}


export default Item;
// const mapStateToProps = state => ({ trucks: state.trucks });

// export default connect(mapStateToProps, actions)(Item)