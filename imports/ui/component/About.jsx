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
        <p>BLAH BLAH BLAH</p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    )
  }
}
