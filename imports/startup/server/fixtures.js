import Resturants from '../../api/resturants/resturant-collection.js';

if (Resturants.find().count() === 1) {
  Resturants.insert({
    name: 'Abbas',
    description: 'its dope',
    address: 'test',
    opening_hours: {
      Monday: '4-10',
      Tuesday: '4-10',
      Wednesday: '4-10',
      Thursday: '4-10',
      Friday: '4-10',
    },
    tables: [
      {
        _id: 33242342,
        table_number: 20,
        location: 'front',
      },
    ],
    createdAt: new Date(),
    owner: 'me',
  });
}
