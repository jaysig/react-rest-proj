import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx'
import ResolutionSingle from './ResolutionSingle.jsx'
import Resolutions from '../../api/resolutions/resolutions.js'

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.resolutions.stop(); //Removes the subscription once the component unmounts
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();
    console.log(this.resolutions());
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear>
        <h1>Meh - {Session.get('test')}</h1>
        <ResolutionsForm />
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}>
          {this.resolutions().map( (resolution)=>{
            return <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}
          </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}
