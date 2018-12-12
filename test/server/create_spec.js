/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');
const Bag = require('../../models/bag');

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

describe('BAG CREATE', () => {

  beforeEach(done => {
    Bag.remove({})
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
    api.post('/api/bags')
      .end((err, res) => {
        expect(res.status).to.eq(404);
        done();
      });
  });

  it('should return a 401 response', done => {
    api.post('/api/bags')
      .set('Authorization', `Bearer ${token}`)
      .send(bagData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/bags')
      .set('Authorization', `Bearer ${token}`)
      .send(bagData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/bags')
      .set('Authorization', `Bearer ${token}`)
      .send(bagData)
      .end((err, res) => {
        expect(res.body.name).to.eq(bagData.name);
        expect(res.body.image).to.eq(bagData.image);
        expect(res.body.brand).to.eq(bagData.brand);
        expect(res.body.brand).to.eq(bagData.brand);
        expect(res.body.detail).to.eq(bagData.detail);
        expect(res.body.description).to.eq(bagData.description);
        expect(res.body.stock).to.eq(bagData.stock);
        expect(res.body.retailPrice).to.eq(bagData.retailPrice);
        done();
      });
  });
});
