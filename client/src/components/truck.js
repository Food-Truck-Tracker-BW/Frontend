import React from "react";
import { Route, NavLink } from "react-router-dom";

import ItemDescription from "../components/truckDescription";

function Item({ items, history, match }) {
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
      <nav className="item-sub-nav">
        <NavLink exact to={`/item-list/${item.id}`}>
          About Us
        </NavLink>
      </nav>
      <Route
        exact
        path="/item-list/:id"
        render={props => <ItemDescription {...props} item={item} />}
      />
    </div>
  );
}

export default Item;