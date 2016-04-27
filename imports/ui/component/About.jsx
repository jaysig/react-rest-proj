import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar() {
    // if(Meteor.isClient) {
      Session.set('Meteor.loginButtons.dropdownVisible', true);
    // }

  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear>
        <h1>About us</h1>
        <p>Revel was built with love from a team from all around the world. No matter who you are, we hope to make
        your resturant experience a bit more magical</p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    )
  }
}
