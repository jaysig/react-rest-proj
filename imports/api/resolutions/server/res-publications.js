import Resolutions from '../resolutions.js'

if(Meteor.isServer) {
  Meteor.publish("allResolutions", function(){
    return Resolutions.find();
  });

  Meteor.publish("userResolutions", function(){
    return Resolutions.find({user: this.userId});
  });
}
