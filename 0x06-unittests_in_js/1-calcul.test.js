const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should correctly sum rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.4), 5);
            assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
            assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should correctly subtract rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.4), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4.5), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 4.5), 1);
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
        });
    });

    describe('DIVIDE operation', () => {
        it('should correctly divide rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.4), 0.25);
            assert.strictEqual(calculateNumber('DIVIDE', 1.5, 4.5), 0.4);
            assert.strictEqual(calculateNumber('DIVIDE', 8.5, 2.4), 3);
            assert.strictEqual(calculateNumber('DIVIDE', -7.5, 2.4), -2.5);
        });

        it('should return "Error" when dividing by rounded zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0), 'Error');
        });
    });

    describe('edge cases', () => {
        it('should handle integer inputs', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
            assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
        });

        it('should handle negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.5, -3.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.5), 2);
            assert.strictEqual(calculateNumber('DIVIDE', -1.5, -3.5), 0.25);
        });

        it('should handle large numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 10000.5, 10000.5), 20002);
            assert.strictEqual(calculateNumber('SUBTRACT', 10000.5, 10000.5), 0);
            assert.strictEqual(calculateNumber('DIVIDE', 10000.5, 10000.5), 1);
        });
    });
});
