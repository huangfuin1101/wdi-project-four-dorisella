/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BagIndex from '../../../src/components/bags/Index';

const testData =[{
  _id: 1234,
  name: 'BUCKET BAG',
  image: 'https://cdn1.vectorstock.com/i/1000x1000/53/00/burger-icon-vector-20075300.jpg',
  detail: '11 X 9 X 7 IN (28 X 23 X 17 CM) 100% CALFSKIN, FLAP CLOSURE WITH HIDDEN METALLIC PIECE AND ZIPPED',
  description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
  retailPrice: 2000,
  stock: 2,
  unitCost: 2000
},{
  _id: 1221,
  name: 'MALL BIG BAG',
  brand: 'LOWEWE',
  image: 'https://images.pexels.com/photos/1590796/pexels-photo-1590796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  detail: '9 X 10 X 9 IN (24 X 26 X 22 CM)  100% CLFSKIN SILVER METAL HARDWARE  100% CALFSKIN LINING  FUNCTIONAL LEATHER BELT TO TIGHTEN THE BAG AND INNER',
  description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
  retailPrice: 1850,
  unitCost: 950,
  stock: 8
},
{
  _id: 1220,
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
  _id: 1223,
  name: 'CABAS PHANTOM IN SOFT GRAINED CALFSKIN',
  brand: 'BLUBERRY',
  image: 'https://images.pexels.com/photos/1068638/pexels-photo-1068638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  detail: '11 X 14 X 8 IN (28 X 36 X 21 CM) 100% CALFSKIN GOLD METAL HARDWARE 100% CALFSKIN LINING',
  description: 'MEDIUM CABAS PHANTOM IN SOFT GRAINED CALFSKIN WITH LEATHER HANDLES AND STRAPS TO TIGHTEN THE BAG',
  retailPrice: 1300,
  unitCost: 750,
  stock: 2
},
{
  _id: 1224,
  name: 'SMALL CABAS IN GRAINED CALFSKIN',
  brand: 'DORISELLA',
  image: 'https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  detail: '9 X 11 X 4 IN (22 X 29 X 10 CM) 100% CALFSKIN  SILVER METAL HARDWARE',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  retailPrice: 820,
  unitCost: 400,
  stock: 4
},{
  _id: 1225,
  name: 'CLASSIC TOTE',
  brand: 'RYNVN',
  image: 'https://images.pexels.com/photos/824724/pexels-photo-824724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  detail: '9 X 10 X 9 IN (24 X 26 X 22 CM) 100% CALFSKIN SILVER METAL HARDWARE 100% CALFSKIN LINING',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  retailPrice: 1850,
  unitCost: 1000,
  stock: 0
}
];


sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: testData }));

describe('Bag Index', () => {
  it('should show the correct number BagBoxes', done => {
    const component = shallow(<BagIndex />);
    component.setState({ filteredBags: testData });
    expect(component.state()).to.have.property('filteredBags');
    expect(component.find('BagBox').length).to.eq(testData.length);
    done();
    console.log(component.debug());
  });

  it('should show the correct number of .search input', done => {
    const component = shallow(<BagIndex />);
    component.setState({ filteredBags: testData });
    expect(component.find('.search').length).to.eq(1);
    done();
  });

  it('should have the correct bag in each BagBox', done => {
    const component = shallow(<BagIndex />);
    component.setState({ filteredBags: testData });
    component.find('BagBox').forEach((box, i) => {
      expect(box.props().bag.name).to.eq(testData[i].name);
    });
    done();
  });
});
