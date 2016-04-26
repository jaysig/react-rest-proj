import React, {Component} from 'react';

export default class About extends Component {

  setVar() {
    // if(Meteor.isClient) {
      Session.set('Meteor.loginButtons.dropdownVisible', true);
    // }

  }

  render() {
    return (
      <div>
        <h1>About us</h1>
        <p>BLAH BLAH BLAH</p>
        <button onClick={this.setVar}>Sign Up</button>
      </div>
    )
  }
}
