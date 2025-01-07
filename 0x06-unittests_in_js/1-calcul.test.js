const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type = SUM', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
        });

        it('equal positive numbers with decimals', () => {
            assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
        });
    });

    describe('type = SUBTRACT', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
        });

        it('equal positive numbers with decimals', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4);
        });
    });

    describe('type = DIVIDE', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4);
        });

        it('numbers with decimals', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.4), 4);
        });

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
        });
    });

    describe('type = DIVIDE (when b is 0)', () => {
        it('regular division by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0), 'Error');
        });

        it('division by number rounded to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0.2), 'Error');
        });

        it('division by negative number rounded to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, -0.2), 'Error');
        });
    });
});
