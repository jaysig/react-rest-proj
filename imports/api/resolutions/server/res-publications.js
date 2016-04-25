import Resolutions from '../resolutions.js'

if(Meteor.isServer) {
  Meteor.publish("allResolutions", function(){
    return Resolutions.find();
  });
}
