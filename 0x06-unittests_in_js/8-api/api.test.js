const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return correct status code 200', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 404 when accessing invalid page', (done) => {
    request.get(`${apiUrl}/invalid_page`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
