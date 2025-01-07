const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    describe('first number rounded', () => {
        it('should round first number only', () => {
            assert.strictEqual(calculateNumber(1.0, 3), 4);
            assert.strictEqual(calculateNumber(1.3, 3), 4);
            assert.strictEqual(calculateNumber(1.7, 3), 5);
            assert.strictEqual(calculateNumber(1.5, 3), 5);
            assert.strictEqual(calculateNumber(2.6, 3), 6);
            assert.strictEqual(calculateNumber(-1.7, 3), -2 + 3);
        });
    });

    describe('second number rounded', () => {
        it('should round second number only', () => {
            assert.strictEqual(calculateNumber(1, 3.0), 4);
            assert.strictEqual(calculateNumber(1, 3.3), 4);
            assert.strictEqual(calculateNumber(1, 3.7), 5);
            assert.strictEqual(calculateNumber(1, 3.5), 5);
            assert.strictEqual(calculateNumber(1, 3.6), 5);
            assert.strictEqual(calculateNumber(1, -3.7), 1 + (-4));
        });
    });

    describe('both numbers rounded', () => {
        it('should round both numbers', () => {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
            assert.strictEqual(calculateNumber(1.5, 3.5), 6);
            assert.strictEqual(calculateNumber(2.6, 2.6), 6);
            assert.strictEqual(calculateNumber(2.2, 2.2), 4);
            assert.strictEqual(calculateNumber(-1.7, -3.7), -6);
            assert.strictEqual(calculateNumber(-1.5, -3.5), -4);
        });
    });
});
