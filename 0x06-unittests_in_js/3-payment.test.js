const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });

  it('should correctly call Utils.calculateNumber with SUM type and proper arguments', () => {
    // Act
    const result = sendPaymentRequestToApi(100, 20);

    // Assert
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(result).to.equal(120);
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should correctly handle decimal numbers', () => {
    // Act
    const result = sendPaymentRequestToApi(10.7, 20.3);

    // Assert
    expect(calculateNumberSpy.calledOnceWith('SUM', 10.7, 20.3)).to.be.true;
    expect(result).to.equal(31); // 11 + 20
    expect(consoleLogSpy.calledWith('The total is: 31')).to.be.true;
  });

  it('should fail if Utils.calculateNumber is not used', () => {
    const originalCalculateNumber = Utils.calculateNumber;
    Utils.calculateNumber = null;

    expect(() => sendPaymentRequestToApi(100, 20)).to.throw();

    Utils.calculateNumber = originalCalculateNumber;
  });
});
