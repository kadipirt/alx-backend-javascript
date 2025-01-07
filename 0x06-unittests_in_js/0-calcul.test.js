const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle rounding up', () => {
        assert.strictEqual(calculateNumber(1.6, 2.6), 5);
        assert.strictEqual(calculateNumber(2.6, 2.6), 6);
        assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    });

    it('should handle rounding down', () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
        assert.strictEqual(calculateNumber(2.4, 2.4), 4);
        assert.strictEqual(calculateNumber(2.4, 2.3), 4);
    });

    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1, -3), -4);
        assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
        assert.strictEqual(calculateNumber(-1.6, -3.6), -6);
        assert.strictEqual(calculateNumber(-1.5, -3.5), -5);
    });

    it('should handle mixed positive and negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.5, 3.5), 3);
        assert.strictEqual(calculateNumber(1.5, -3.5), -2);
        assert.strictEqual(calculateNumber(-1.6, 3.6), 2);
        assert.strictEqual(calculateNumber(1.6, -3.6), -2);
    });

    it('should handle zero values', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(0, 3.6), 4);
        assert.strictEqual(calculateNumber(3.6, 0), 4);
        assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    });

    it('should handle decimal numbers close to whole numbers', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
        assert.strictEqual(calculateNumber(2.5000001, 3.5000001), 7);
        assert.strictEqual(calculateNumber(2.999999, 3.999999), 7);
    });
});
