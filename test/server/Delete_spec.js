/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');
const Bag = require('../../models/bag');
// const User = require('../../models/user');
// const jwt = require('jsonwebtoken');
// const { secret } = require('../../config/environment');
// const Bag = require('../../models/bag');

const bagIds = [
  '5be9860fcb16d525543cebb2'
];

const bagData =[
  {
    _id: bagIds[0],
    name: 'MINI BELT BAG',
    brand: 'CELINNE',
    image: 'https://images.pexels.com/photos/933499/pexels-photo-933499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    detail: '11 X 9 X 7 IN (28 X 23 X 17 CM) 100% CALFSKIN, FLAP CLOSURE WITH HIDDEN METALLIC PIECE AND ZIPPED',
    description: 'MINI BELT BAG IN GRAINED CALFSKIN WITH A LEATHER HANDLE,A REMOVABLE SHOULDER STRAP, AND A ZIPPED OUTER POCKET ON THE BACK. THE BAG CLOSES TWO WAYS: TOP FLAP AND ZIPPER.',
    retailPrice: 1600,
    unitCost: 1000,
    stock: 2
  }];


let token;
let bagId;


describe('BAG DELETE', () => {

  beforeEach(done => {
    Bag.remove({})
      .then(() => Bag.create(bagData))
      .then(bag => {
        bagId = bag._id;
      })
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '5h' });
        done();
      });
  });
  it('should return a 404 response without a token', done => {
    api.delete(`/api/bags/${bagId}`)
      .end((err, res) => {
        expect(res.status).to.eq(404);
        done();
      });
  });

  it('should return a 401 response', done => {
    api.delete(`/api/bags/${bagId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(bagData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });
});
