const request = require('supertest');

const server = require('../server/server.js');

describe('Route Testing', () => {
  afterAll((done) => {
    server.close(done);
  });
  describe('/api/trips', () => {
    it ('returns status 200 when getting all trips', () => {
      return request(server)
        .get('/api/trips')
        .expect(200);
    })
  })
  describe('/api/events', () => {
    it ('returns status 200 when searching for a particular location', () => {
      return request(server)
        .get('/api/events')
        .expect(200)
        //expect test to fail

    })
  })
  describe('/api/new-trip' , () => {
    it('return error on incorrect data entry', () => {
      return request(server)
      .post('/api/new-trip')
      .send({'name': 'testName', 'start_date':'2021-05-04', 'end_date':'2021-06-05', 'people':'testPeople', 'location':'testLocation'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    })
  })
  // describe('/api/remove-trip' , () => {
  //   it('')
  // })
})