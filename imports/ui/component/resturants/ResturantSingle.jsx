import React, {Component} from 'react';

export default class ResturantSingle extends Component {
  // toggleChecked(){
  //   Meteor.call('toggleResolution',this.props.resolution);
  // }

  deleteResturant(){
    Meteor.call('deleteResturant', this.props.resturant);
  }

  render() {
    // const resturantClass = this.props.resturant.complete ? "checked" : "";
    // const status = this.props.rest.complete ? <span className="completed">Completed</span> : "";

    return (
      // <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">

        <div className={"resturant-card-square mdl-card mdl-shadow--2dp"}>

          {/*<input type="checkbox"
                 readOnly={true}
                 checked={this.props.resolution.complete}
                 onClick={this.toggleChecked.bind(this)} />*/}
         <div className="mdl-card__title">
          <h2 className="mdl-card__title-text"><a href={`/resturants/${this.props.resturant._id}`}>{this.props.resturant.name}</a></h2>
          <button className="btn-cancel"
            onClick={this.deleteResturant.bind(this)}>
            &times;
          </button>
        </div>
        <div className="mdl-card__supporting-text">
        {this.props.resturant.description}
        {this.props.resturant.address}
        </div>

          {/*{status}*/}


        </div>


    )
  }
}
