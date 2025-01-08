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

describe('Cart page', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return correct status code 200 when id is a number', (done) => {
    request.get(`${apiUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when id is a number', (done) => {
    request.get(`${apiUrl}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when id is not a number', (done) => {
    request.get(`${apiUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return correct status code and payment methods', (done) => {
    request.get(`${apiUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return welcome message with correct username', (done) => {
    request.post(`${apiUrl}/login`, {
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
