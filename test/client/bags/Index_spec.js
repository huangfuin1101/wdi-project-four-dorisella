/* global after, before, beforeEach, describe, it, console */

import React from 'react';
import { MemoryRouter, Route  } from 'react-router-dom';
import axios from 'axios';

import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import BagIndex from '../../../src/components/bags/Index';
// import BagBox from '../../../src/components/bags/BagBox';

const bagData = {
  _id: 1234,
  name: 'Bucket Bag',
  image: 'https://cdn1.vectorstock.com/i/1000x1000/53/00/burger-icon-vector-20075300.jpg',
  detail: '11 X 9 X 7 IN (28 X 23 X 17 CM) 100% CALFSKIN, FLAP CLOSURE WITH HIDDEN METALLIC PIECE AND ZIPPED',
  description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
  retailPrice: 2000,
  stock: 2,
  unitCost: 2000

};

// Since there is no router, there is no this.props.match.params.id!
// Here, we're just going to invent a match object, and pass it to props
// when we render the component

// describe('BagsIndex tests', () => {
  // let wrapper ;
  // let promise ;
  //
  // let promise = null;
  // let wrapper = null;

describe('BagIndex tests', () => {
  let promise = null;
  let wrapper = null;

  before(done => {
    promise = Promise.resolve({ data: bagData });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <BagIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should display six bags', done => {
    promise.then(() => {
      wrapper.update();
      // expect(wrapper.find('column').length).to.eq(6);
      console.log(wrapper.debug());
      done();
    })
      .catch(done);
  });


});
