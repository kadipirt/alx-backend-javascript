const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with correct arguments', () => {
        // Create a spy for Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function we want to test
        sendPaymentRequestToApi(100, 20);

        // Verify the spy was called with correct arguments
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        // Verify the spy returns the expected sum
        expect(calculateNumberSpy.returnValues[0]).to.equal(120);

        // Restore the spy
        calculateNumberSpy.restore();
    });
});
