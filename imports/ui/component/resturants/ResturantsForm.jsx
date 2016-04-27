import React, {Component} from 'react';

export default class ResturantsForm extends Component {
  addResturant(event) {
    event.preventDefault();
    console.log(this.refs);
    var resturant = {
      name: this.refs.name.value.trim(),
      description: this.refs.description.value.trim(),
      address: this.refs.address.value.trim()
    }
    if(resturant.name){
      Meteor.call('addResturant', resturant, (error,data)=>{
        if(error){
          Bert.alert(error)
          // Bert.alert('Please login before submitting','danger','fixed-top','fa-frown-o')
        } else {
        this.refs.name.value = ""
        this.refs.description.value = ""
        this.refs.address.value = ""
        }
      });
    }
  }
  // Binding this is important for ensuring access to the data
  render() {
    return (
      <form className="new-resturant" onSubmit={this.addResturant.bind(this)}>
        <input
          type="text"
          ref="name"
          placeholder="What resturant are you looking for?" />
          <input
            type="text"
            ref="description"
            placeholder="What makes it cool?" />
            <input
              type="text"
              ref="address"
              placeholder="Whats the address?" />
        <button type="submit">Add a Resturant</button>
      </form>

    )
  }
}
