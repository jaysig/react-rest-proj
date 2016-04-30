import Resturants from '../../api/resturants/resturant-collection.js';

if (Resturants.find().count() === 0) {
  Resturants.insert({
    name: 'Abbas',
    description: 'its dope',
    address: 'test',
    createdAt: new Date(),
    owner: 'me',
  });
}
