/* global SimpleSchema, FlowRouter, DocHead, Orders, sAlert
/* eslint-disable max-len, camelcase */
/* eslint-disable max-len, camelcase */
import { Random } from 'meteor/random';
const Resturants = new Mongo.Collection('resturants');
const ResturantSchema = new SimpleSchema({
  // _id: {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Id,
  //   autoValue: function() {
  //     return Random.id();
  //   },
  // },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  opening_hours: {
    type: Object,
  },
  tables: {
    type: [Object],
    optional: true,
  },
  'tables.$._id': {
    type: Number,
  },
  'tables.$.table_number': {
    type: Number,
  },
  'tables.$.location': {
    type: String,
  },
  createdAt: { // Force value to be current date (on server) upon insert and prevent updates thereafter.
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
          // Prevent user from supplying their own value
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
Resturants.attachSchema(ResturantSchema);
export default Resturants;
