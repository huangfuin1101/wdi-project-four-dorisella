/* global describe, it, expect, api, beforeEach */

const User = require('../../../models/user');

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



describe('USER REGISTER', () => {

  beforeEach(done => {
    User
      .remove({})
      .then(() => User.create(userData))
      .then(()=> {
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

});
