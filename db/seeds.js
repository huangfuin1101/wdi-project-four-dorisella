const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Bag = require('../models/bag');
const User = require('../models/user');
const Purchase = require('../models/purchase');



const bagIds = [
  '5be9860fcb16d525543cebb2',
  '5be9860fcb16d525543ceda9',
  '5be9860fcb16d525543ceda3',
  '5be9860fcb16d525543ceda4',
  '5be9860fcb16d525543cedc6',
  '5be9860fcb16d525543cedc7'
];

const userIds = [
  '5be9860fcb16d525543cefa0',
  '5be9860fcb16d525543ceba2'
];

const purchaseIds = [
  '5be9860fcb16d525543cede4',
  '5be9860fcb16d525543beba9'
];
//
//
const purchaseData = [
  {
    _id: purchaseIds[0],
    bag: bagIds[0],
    unitQuantity: 1,
    user: userIds[0],
    retailPrice: 1600,
    unitCost: 1000,
    status: 'paid'
  }, {
    _id: purchaseIds[1],
    bag: bagIds[1],
    unitQuantity: 2,
    user: userIds[0],
    retailPrice: 1850,
    unitCost: 950,
    status: 'paid'
  }
];

const userData = [{
  _id: userIds[0],
  username: 'doris',
  email: 'd@d',
  password: 'pass',
  admin: true
},{
  _id: userIds[1],
  username: 'cua',
  email: 'c@c',
  password: 'pass'
}];

mongoose.connect(dbURI);

const bagData =[
  {
    _id: bagIds[0],
    name: 'MINI BELT BAG',
    brand: 'CELINNE',
    // image: './images/bag.jpg',
    image: 'https://images.pexels.com/photos/933499/pexels-photo-933499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    detail: '11 X 9 X 7 IN (28 X 23 X 17 CM) 100% CALFSKIN, FLAP CLOSURE WITH HIDDEN METALLIC PIECE AND ZIPPED',
    description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
    retailPrice: 1600,
    unitCost: 1000,
    stock: 2
  },
  {
    _id: bagIds[1],
    name: 'MALL BIG BAG',
    brand: 'LOWEWE',
    image: 'https://images.pexels.com/photos/1590796/pexels-photo-1590796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    // image: 'https://www.celine.com/dw/image/v2/BBST_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw84c2988c/images/large/183313A4U.38NO_1_LIBRARY_81246.jpg?sw=1156&sh=1600&sm=fit&strip=false',
    detail: '9 X 10 X 9 IN (24 X 26 X 22 CM)  100% CLFSKIN SILVER METAL HARDWARE  100% CALFSKIN LINING  FUNCTIONAL LEATHER BELT TO TIGHTEN THE BAG AND INNER',
    description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
    retailPrice: 1850,
    unitCost: 950,
    stock: 3
  },
  {
    _id: bagIds[2],
    name: 'MEDIUM CLASSIC BAG',
    brand: 'COROLINA & H',
    // image: 'https://cdn.shopify.com/s/files/1/0352/7949/products/Mini_Bucket_Bag_Vegetable_Tanned_Black_Flamma_Detail_1_01fec1fe-13d1-4d02-bd37-a4ea3a72e53c_1920x.jpg?v=1527312576',
    image: 'https://images.pexels.com/photos/936098/pexels-photo-936098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    detail: '9 X 7 X 3 IN (24 X 18 X 7 CM) 100% CALFSKIN GOLD METAL HARDWARE 100% LAMBSKIN LINING',
    description: 'MEDIUM CLASSIC BAG IN BOX CALFSKIN WITH AN ADJUSTABLE AND REMOVABLE LEATHER STRAP AND A BRASS CLASP CLOSURE',
    retailPrice: 2850,
    unitCost: 2000,
    stock: 5
  },
  {
    _id: bagIds[3],
    name: 'CABAS PHANTOM IN SOFT GRAINED CALFSKIN',
    brand: 'BLUBERRY',
    // image: 'https://www.celine.com/dw/image/v2/BBST_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw06ceccc0/images/large/174143TNI.18TP_2_LIBRARY_80861.jpg?sw=1156&sh=1600&sm=fit&strip=false',
    image: 'https://images.pexels.com/photos/1068638/pexels-photo-1068638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    detail: '11 X 14 X 8 IN (28 X 36 X 21 CM) 100% CALFSKIN GOLD METAL HARDWARE 100% CALFSKIN LINING',
    description: 'MEDIUM CABAS PHANTOM IN SOFT GRAINED CALFSKIN WITH LEATHER HANDLES AND STRAPS TO TIGHTEN THE BAG',
    retailPrice: 1300,
    unitCost: 750,
    stock: 2
  },
  {
    _id: bagIds[4],
    name: 'SMALL CABAS IN GRAINED CALFSKIN',
    brand: 'DORISELLA',
    image: 'https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    detail: '9 X 11 X 4 IN (22 X 29 X 10 CM) 100% CALFSKIN  SILVER METAL HARDWARE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    retailPrice: 820,
    unitCost: 400,
    stock: 4
  },{
    _id: bagIds[5],
    name: 'CLASSIC TOTE',
    brand: 'RYNVN',
    image: 'https://images.pexels.com/photos/824724/pexels-photo-824724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    detail: '9 X 10 X 9 IN (24 X 26 X 22 CM) 100% CALFSKIN SILVER METAL HARDWARE 100% CALFSKIN LINING',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    retailPrice: 1850,
    unitCost: 1000,
    stock: 2
  }];


Bag.collection.drop();
User.collection.drop();
Purchase.collection.drop();

Bag.create(bagData)
  .then(bags => {
    console.log(`${bags.length} bags have been created`);
    User
      .create(userData)
      .then(users => {
        console.log(`${users.length} users have been created`);
        Purchase
          .create(purchaseData)
          .then(purchase => {
            console.log(`${purchase.length} purchases have been created`);
            mongoose.connection.close();
          });
      });
  });
