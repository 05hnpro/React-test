import React, {Component} from 'react';
import { connect } from "react-redux";
import { getRestaurantsRequest } from "../actions/restaurants";
import { bindActionCreators } from 'redux';

class Home extends Component {
    render() {
      return (
        <div>HOME</div>
      );
    }
  }
  
  //Map the latest state to props
  const mapStateToProps = state => ({ 
    restaurants: state.restaurants,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getRestaurantsRequest
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);