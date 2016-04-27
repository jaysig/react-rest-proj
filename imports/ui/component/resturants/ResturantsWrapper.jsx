import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResturantsForm from './ResturantsForm.jsx'
import ResturantSingle from './ResturantSingle.jsx'
import Resturants from '../../../api/resturants/resturant-collection.js'

export default class ResturantWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        resturants: Meteor.subscribe("resturants")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.resturants.stop(); //Removes the subscription once the component unmounts
  }

  resturants() {
    return Resturants.find().fetch();
  }

  render() {
    let res = this.resturants();
    console.log(this.resturants());
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear>
          <h1>Resturant Party {Session.get('test')}</h1>
          <ResturantsForm />
          <ReactCSSTransitionGroup
            component="ul"
            className="resturants"
            transitionName="resturantLoad"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={400}>
            {this.resturants().map( (resturant)=>{
              console.log(resturant);
              return <ResturantSingle key={resturant._id} resturant={resturant} />
            })}
            </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}
