import React, {Component} from 'react';

export default class ResturantSingle extends Component {
  // toggleChecked(){
  //   Meteor.call('toggleResolution',this.props.resolution);
  // }

  deleteResturant(){
    Meteor.call('deleteResturant',this.props.resturant);
  }

  render() {
    // const resturantClass = this.props.resturant.complete ? "checked" : "";
    // const status = this.props.rest.complete ? <span className="completed">Completed</span> : "";

    return (
      <li className={""}>
        {/*<input type="checkbox"
               readOnly={true}
               checked={this.props.resolution.complete}
               onClick={this.toggleChecked.bind(this)} />*/}
        <a href={`/resturants/${this.props.resturant._id}`}>{this.props.resturant.name}</a>
        {this.props.resturant.description}
        {this.props.resturant.address}
        {/*{status}*/}
        <button className="btn-cancel"
          onClick={this.deleteResturant.bind(this)}>
          &times;
        </button>
      </li>
    )
  }
}
