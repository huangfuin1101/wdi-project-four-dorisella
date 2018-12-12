/* global describe, it, expect, api, beforeEach */

const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const userIds = [
  '5be9860fcb16d525543cefa0',
  '5be9860fcb16d525543ceba2'
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


describe('USER LOGIN', () => {
  let token;

  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData)
        .then(user => {
          token = jwt.sign({ sub: user.id }, secret, {expiresIn: '5hr'});
          done();
        }));
  });

  it('should return a 401 response', done => {
    api.post('/api/login')
      .send(userData)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 401 response if password invalid', done => {
    api.post('/api/login')
      .send(userData)
      .set('Authorization', `Bearer ${token}`)
      .send((err, res) => {
        expect(res.status).to.eq(401);
      });
    done();
  });
});
