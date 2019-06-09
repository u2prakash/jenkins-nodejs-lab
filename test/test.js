var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with nodejs-lab', function(done) {
    request(app).get('/').expect('maintain by prakash Dahal', done);
  });
});
