/* global describe,it,beforeEach */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import BagBox from '../../../src/components/bags/BagBox';

const testData =
  {
    _id: 1234,
    name: 'BUCKET BAG',
    image: 'https://cdn1.vectorstock.com/i/1000x1000/53/00/burger-icon-vector-20075300.jpg',
    detail: '11 X 9 X 7 IN (28 X 23 X 17 CM) 100% CALFSKIN, FLAP CLOSURE WITH HIDDEN METALLIC PIECE AND ZIPPED',
    description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
    retailPrice: 2000,
    stock: 2,
    unitCost: 2000
  };

describe('BagBox', () => {
  it('should show the correct bag', done => {
    const component = shallow(<BagBox bag={testData}/>);
    expect(component.find('img').length).to.eq(1);
    expect(component.find('img').props().src).to.eq(testData.image);
    done();
  });
});
