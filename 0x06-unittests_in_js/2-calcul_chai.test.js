const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should add rounded numbers correctly', () => {
            // Regular integers
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
            
            // Rounding a
            expect(calculateNumber('SUM', 1.4, 3)).to.equal(4);
            expect(calculateNumber('SUM', 1.6, 3)).to.equal(5);
            
            // Rounding b
            expect(calculateNumber('SUM', 1, 3.4)).to.equal(4);
            expect(calculateNumber('SUM', 1, 3.6)).to.equal(5);
            
            // Rounding both
            expect(calculateNumber('SUM', 1.4, 3.4)).to.equal(4);
            expect(calculateNumber('SUM', 1.6, 3.6)).to.equal(6);
            
            // Negative numbers
            expect(calculateNumber('SUM', -1.4, -3.4)).to.equal(-4);
        });
    });

    describe('SUBTRACT', () => {
        it('should subtract rounded numbers correctly', () => {
            // Regular integers
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
            
            // Rounding a
            expect(calculateNumber('SUBTRACT', 3.4, 1)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 3.6, 1)).to.equal(3);
            
            // Rounding b
            expect(calculateNumber('SUBTRACT', 3, 1.4)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 3, 1.6)).to.equal(1);
            
            // Rounding both
            expect(calculateNumber('SUBTRACT', 3.4, 1.4)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 3.6, 1.6)).to.equal(2);
            
            // Negative numbers
            expect(calculateNumber('SUBTRACT', -3.4, -1.4)).to.equal(-2);
        });
    });

    describe('DIVIDE', () => {
        it('should divide rounded numbers correctly', () => {
            // Regular integers
            expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
            
            // Rounding a
            expect(calculateNumber('DIVIDE', 4.4, 2)).to.equal(2);
            expect(calculateNumber('DIVIDE', 4.6, 2)).to.equal(2.5);
            
            // Rounding b
            expect(calculateNumber('DIVIDE', 4, 2.4)).to.equal(2);
            expect(calculateNumber('DIVIDE', 4, 2.6)).to.equal(1.3333333333333333);
            
            // Rounding both
            expect(calculateNumber('DIVIDE', 4.4, 2.4)).to.equal(2);
            expect(calculateNumber('DIVIDE', 4.6, 2.6)).to.equal(1.6666666666666667);
            
            // Negative numbers
            expect(calculateNumber('DIVIDE', -4.4, 2.4)).to.equal(-2);
        });

        describe('when dividing by zero', () => {
            it('should return "Error" when dividing by zero', () => {
                // Direct zero
                expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
                
                // Rounded to zero
                expect(calculateNumber('DIVIDE', 4, 0.4)).to.equal('Error');
                expect(calculateNumber('DIVIDE', 4, -0.4)).to.equal('Error');
                
                // Zero with decimals
                expect(calculateNumber('DIVIDE', 4, 0.2)).to.equal('Error');
            });
        });
    });
});
