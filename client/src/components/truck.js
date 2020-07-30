import React from "react";
import { Route, Link } from "react-router-dom";

import ItemDescription from "../components/truckDescription";

function Item({ items, match }) {
  
  // * used to find truck being clicked in 
  const item = items.find(thing => `${thing.id}` === match.params.id);

  if (!item) {
    return <h2>Loading truck data...</h2>;
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
        </div>
      </div>
      <Link to={`/item-list/${item.id}`}>
        <Route path={`/item-list/${item.id}`} component={ItemDescription}>
          About Us
        </Route>
      </Link>
    </div>
  );
}

export default Item;