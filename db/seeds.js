const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Bag = require('../models/bag');
const User = require('../models/user');

const userData = [{
  username: 'doris',
  email: 'd@d',
  password: 'pass'
}];

mongoose.connect(dbURI);

const bagData =[
  {
    name: 'MINI BELT BAG IN GRAINED CALFSKIN',
    brand: 'CELINE',
    // image: '../images.bag.jpg',
    image: 'https://www.celine.com/dw/image/v2/BBST_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwad47d6e2/images/large/189103ZVA.10DC_1_LIBRARY_85428.jpg?sw=1156&sh=1600&sm=fit&strip=false',
    detail: '11 X 9 X 7 IN (28 X 23 X 17 CM) 100% CALFSKIN, FLAP CLOSURE WITH HIDDEN METALLIC PIECE AND ZIPPED',
    description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
    price: 1600
  },
  {
    name: 'MALL BIG BAG WITH LONG STRAP IN SUPPLE GRAINED CALFSKIN',
    brand: 'CELINE',
    image: 'https://www.celine.com/dw/image/v2/BBST_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw84c2988c/images/large/183313A4U.38NO_1_LIBRARY_81246.jpg?sw=1156&sh=1600&sm=fit&strip=false',
    detail: '9 X 10 X 9 IN (24 X 26 X 22 CM)  100% CLFSKIN SILVER METAL HARDWARE  100% CALFSKIN LINING  FUNCTIONAL LEATHER BELT TO TIGHTEN THE BAG AND INNER',

    description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
    price: 1850
  },
  {
    name: 'BLACK MINI BUCKET BAG',
    brand: 'MANSUR GAVRIEL',
    image: 'https://cdn.shopify.com/s/files/1/0352/7949/products/Mini_Bucket_Bag_Vegetable_Tanned_Black_Flamma_Detail_1_01fec1fe-13d1-4d02-bd37-a4ea3a72e53c_1920x.jpg?v=1527312576',
    detail: '9.5" H X 8" W X 4.5"  D  Longest Drop: 24" Shortest Drop: 19" Longest Length: 54" Shortest Length: 43 X 22 CM',
    description: 'Italian vegetable tanned leather black mini bucket bag with red matte patent interior.',
    price: 400
  },
  {
    name: 'BLACK SMALL TOTE',
    brand: 'MANSUR GAVRIEL',
    image: 'https://cdn.shopify.com/s/files/1/0352/7949/products/Small_Tote_Vegetable_Tanned_Black_Flamma_detail_1_6207c049-7636-43b8-be67-ccf655c57b9f_1440x.jpg?v=1530940974',
    detail: ' 10"H X 13.5"W X 4.5"D  Top Handle Drop: 8.5”',
    description: 'Italian vegetable tanned black leather small tote with red matte patent interior. Detachable wallet. Made in Italy.',
    price: 425
  },
  {
    name: 'SMALL CLASSIC HANDBAG',
    brand: 'CHANEL',
    image: 'https://www.chanel.com/images/u_sample,w_5000,h_1,g_south,b_white/e_trim:0/c_crop,w_iw,h_ih/u_sample,w_5000,h_1,g_north,b_white/e_trim:0/c_crop,w_iw,h_ih/c_pad,w_iw,h_ih/e_trim:0/q_auto,f_auto,fl_lossy,dpr_auto/w_1096/small-classic-handbag-navy-blue-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-a01113y255395b313-8805002969118.jpg',
    detail: ' Lambskin  Navy Blue 14.5 × 6 × 23 cm',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 425
  }];


Bag.collection.drop();
User.collection.drop();

Bag.create(bagData)
  .then(bags => {
    console.log(`${bags.length} bags have been created`);
    User
      .create(userData)
      .then(users => {
        console.log(`${users.length} users have been created`);
        mongoose.connection.close();
      });
  });
