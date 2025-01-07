const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('type = SUM', () => {
        it('should return sum of rounded numbers', () => {
            expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
            expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
            expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
            expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
            expect(calculateNumber('SUM', 2.6, 3.7)).to.equal(7);
        });
    });

    describe('type = SUBTRACT', () => {
        it('should return difference of rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
            expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
            expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
            expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 3.6, 1.7)).to.equal(2);
        });
    });

    describe('type = DIVIDE', () => {
        it('should return quotient of rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
            expect(calculateNumber('DIVIDE', 8.4, 2.4)).to.equal(4);
            expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
            expect(calculateNumber('DIVIDE', 7.5, 2.5)).to.equal(3);
        });

        describe('when dividing by zero', () => {
            it('should return "Error" when dividing by zero', () => {
                expect(calculateNumber('DIVIDE', 8.0, 0)).to.equal('Error');
                expect(calculateNumber('DIVIDE', 8.0, 0.2)).to.equal('Error');
                expect(calculateNumber('DIVIDE', 8.0, -0.2)).to.equal('Error');
                expect(calculateNumber('DIVIDE', 8.0, 0.4)).to.equal('Error');
            });
        });
    });
});
