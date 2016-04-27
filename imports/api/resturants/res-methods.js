import Resturants from './resturant-collection.js'

Meteor.methods({
  addResturant(resturant) {
    check(resturant, Object);
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Resturants.insert({
      name: resturant.name,
      description: resturant.description,
      address: resturant.address,
      createdAt: new Date(),
      owner: 'me',
      user: Meteor.userId()
    });
  },
  // toggleResturant(resturant) {
  //   check(resturant, Object);
  //   if(Meteor.userId() !== resturant.user) {
  //     throw new Meteor.Error('not-authorized');
  //   }
  //   Resturants.update(resturant._id,{
  //     $set: {complete: !resturant.complete}
  //   });
  // },
  deleteResturant(resturant) {
    check(resturant, Object);
    if(Meteor.userId() !== resturant.user) {
      console.log(Meteor.userId + " hi " + resturant.user)
      throw new Meteor.Error('not-authorized');
    }
    Resturants.remove(resturant._id);
  }
});
