/* eslint-disable quotes */
// http://www.blacksheeprestaurants.com/
import Resturants from '../../api/resturants/resturant-collection.js';

if (Resturants.find().count() === 1) {
  Resturants.insert({
    name: 'CARBONE',
    description: `CARBONE IS A NEW YORK-STYLE ITALIAN RESTAURANT`,
    address: '9/F, Lan Kwai Fong Tower, 33 Wyndham Street',
    opening_hours: {
      Monday: "17:00-23:00",
      Tuesday: "17:00-23:00",
      Wednesday: "17:00-23:00",
      Thursday: "17:00-23:00",
      Friday: "17:00-23:00",
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
    user: 'me',
  });
  Resturants.insert({
    name: 'LE GARÇON SAIGON',
    description: `LE GARÇON SAIGON CELEBRATES THE VIBRANT AND FRESH FLAVOURS
    OF SAIGONESE CUISINE IN A BRIGHT AND WELCOMING SPACE THAT EVOKES THE
    SOPHISTICATION OF A CHIC PARISIAN BRASSERIE. CONVENIENTLY LOCATED IN
    THE CHARMING STAR STREET NEIGHBOURHOOD, THE ESTABLISHMENT IS THE
    PERFECT ADDITION TO THE AREA’S QUAINT BOUTIQUES AND EATERIES. `,
    address: 'G/F, 12-18 Wing Fung Street',
    opening_hours: {
      Monday: "17:00-23:00",
      Tuesday: "17:00-23:00",
      Wednesday: "17:00-23:00",
      Thursday: "17:00-23:00",
      Friday: "17:00-23:00",
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
    user: 'me',
  });
  Resturants.insert({
    name: 'HO LEE FOOK',
    description: `HO LEE FOOK “GOOD FORTUNE FOR YOUR MOUTH” IS A FUNKY CHINESE KITCHEN`,
    address: 'G/F No. 1-5 Elgin Street',
    opening_hours: {
      Monday: "17:00-23:00",
      Tuesday: "17:00-23:00",
      Wednesday: "17:00-23:00",
      Thursday: "17:00-23:00",
      Friday: "17:00-23:00",
    },
    tables: [
      {
        _id: 33242342,
        table_number: 20,
        location: 'front',
      },
    ],
    createdAt: new Date(),
    owner: 'black_sheep_restaurants',
    user: 'me',
  });
}
