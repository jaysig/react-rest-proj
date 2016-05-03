import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import ResturantsForm from './ResturantsForm.jsx';
import ResturantSingle from './ResturantSingle.jsx';
import Resturants from '../../../api/resturants/resturant-collection.js';

export default class ResturantWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        resturants: Meteor.subscribe("resturants"),
      },
      search: '',
    }
  }

  componentWillUnmount(){
    this.state.subscription.resturants.stop(); //Removes the subscription once the component unmounts
  }

  resturants() {
    return Resturants.find().fetch();
  }
  updateSearch(event) {
    console.log('hello');
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  }
  render() {
    let res = this.resturants();
    let filteredList = res.filter(
      (venue) => {
        // console.log(venue.name);
        // console.log(this.state.search);
        return venue.name.toLowerCase()
        .indexOf(this.state.search) !== -1;
      }
    );
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear>
          <h1>Resturant Party {Session.get('test')}</h1>
          {/*<ResturantsForm />*/}
          <ReactCSSTransitionGroup
            component="ul"
            className="resturants"
            transitionName="resturantLoad"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={400}>
            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/>
            {filteredList.map( (resturant)=>{
              return <ResturantSingle key={resturant._id} resturant={resturant} />
            })}
            </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}
