import Resturants from '../resturant-collection.js'

if(Meteor.isServer) {
  Meteor.publish("resturants", function(){
    return Resturants.find();
  });

  // Meteor.publish("userResolutions", function(){
  //   return Resolutions.find({user: this.userId});
  // });
}
