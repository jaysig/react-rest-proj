import { Meteor } from 'meteor/meteor';
import '../imports/ui/component/ResolutionsWrapper.jsx';
import '../imports/api/resolutions/res-methods.js';
import '../imports/api/resolutions/server/res-publications.js';
// import '../imports/ui/component/ResolutionsWrapper.jsx';
import '../imports/api/resturants/res-methods.js';
import '../imports/api/resturants/server/resturant-publications.js';
import '../imports/startup/server/fixtures.js';
Meteor.startup(() => {
  // code to run on server at startup
});
