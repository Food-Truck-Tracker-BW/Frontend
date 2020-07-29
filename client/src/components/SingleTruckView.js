import React from "react";
import { connect } from "react-redux";

import { getItems } from "../actions/truckIndex";

import Item from "./truck";

class ItemView extends React.Component {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.getItems();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.props.history.push("/item-list");
    }
  }

  render() {
    return (
      <Item
        items={this.props.items}
        history={this.props.history}
        match={this.props.match}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getItems }
)(ItemView);


// * missing get items file? 
