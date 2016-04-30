/* global SimpleSchema, FlowRouter, DocHead, Orders, sAlert
/* eslint-disable max-len, camelcase */
/* eslint-disable max-len, camelcase */
const Resturants = new Mongo.Collection('resturants');
const ResturantSchema = new SimpleSchema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: { // Force value to be current date (on server) upon insert and prevent updates thereafter.
    type: Date,
    autoValue: () => {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
  },
  owner: {
    type: String,
  },
  user: {
    type: String,
  },

});
Orders.attachSchema(ResturantSchema);
export default Resturants;
