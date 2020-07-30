import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';


// * components
import Truck from './truck';
import MainMenu from './MainMenu';


// * action creators
import * as actions from '../actions/index';

// class ItemView extends React.Component {
//   componentDidMount() {
//     if (this.props.items.length === 0) {
//       this.props.getItems();
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.items.length !== this.props.items.length) {
//       this.props.history.push("/item-list");
//     }
//   }

//   render() {
//     return (
//       <Item
//         items={this.props.items}
//         history={this.props.history}
//         match={this.props.match}
//       />
//     );
//   }
// }

// const mapStateToProps = state => ({
//   items: state.items
// });

// export default connect(
//   mapStateToProps,
//   { getItems }
// )(ItemView);


const ItemView = (props) => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  // * useEffect send dispatcxh to set the selcted truck to state in store 
  useEffect(() => {
    props.getTruckById(id)
  }, [])

  // * useEffect dependent on the updating of selected truck state to render 
  // * component conditrionally
  useEffect(() => {
    if (props.selectedTruck) setIsLoaded(true);
  }, [props.selectedTruck])

  
  return (
    <div className='truck-info-container'>
      {isLoaded 
      ? <Truck {...props.selectedTruck} />
      : <div>still loading</div>}

    </div>
  )
};

// export default ItemView;

const mapStateToProps = state => ({ selectedTruck: state.selectedTruck });

export default connect(mapStateToProps, actions)(ItemView)
