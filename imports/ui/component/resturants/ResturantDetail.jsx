import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Resturants from '../../../api/resturants/resturant-collection.js'

export default class ResturantDetail extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        // reservations: Meteor.subscribe("userReservations"),
        resturants:   Meteor.subscribe("resturants")
      }
    }
  }

  componentWillUnmount(){
    // this.state.subscription.reservations.stop(); //Removes the subscription once the component unmounts
    this.state.subscription.resturants.stop();
  }

  resturant() {
    return Resturants.findOne(this.props.id);
  }

  render() {
    let res = this.resturant();

    if(!res){
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <h1>{res.name}</h1>
        <h2>{res.description}</h2>
        <h2>{res.address}</h2>
        <h2>{res.menu}</h2>
        <a href="">Menu</a>
      </div>
    )
  }
}
