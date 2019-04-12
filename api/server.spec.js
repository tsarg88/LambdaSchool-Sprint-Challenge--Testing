const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('should respond with 200 OK async', async () => {
            const response = await request(server).get('/');
      
            expect(response.status).toBe(200);
          });
    })
    it('should return { api: "Server is working" }', () => {
        return request(server)
          .get('/')
          .then(res => {
            expect(res.body).toEqual({ message: 'Server is working' });
          });
      });
})
        