const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create spy before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Clean up spy after each test
    consoleLogSpy.restore();
  });

  it('should log correct message for payment (100, 20)', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the spy was called with correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 120');
  });

  it('should log correct message for payment (10, 10)', () => {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify the spy was called with correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 20');
  });
});
