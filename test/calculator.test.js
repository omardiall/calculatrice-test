const { expect } = require('chai');
const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add()', () => {
    it('2 + 3 = 5', () => {
      expect(calc.add(2, 3)).to.equal(5);
    });

    it('10 + (-4) = 6', () => {
      expect(calc.add(10, -4)).to.equal(6);
    });
  });

  describe('subtract()', () => {
    it('10 - 4 = 6', () => {
      expect(calc.subtract(10, 4)).to.equal(6);
    });

    it('4 - 10 = -6', () => {
      expect(calc.subtract(4, 10)).to.equal(-6);
    });
  });

  describe('multiply()', () => {
    it('3 * 4 = 12', () => {
      expect(calc.multiply(3, 4)).to.equal(12);
    });

    it('7 * 0 = 0', () => {
      expect(calc.multiply(7, 0)).to.equal(0);
    });
  });

  describe('divide()', () => {
    it('10 / 2 = 5', () => {
      expect(calc.divide(10, 2)).to.equal(5);
    });

    it('division par zéro → erreur', () => {
      expect(() => calc.divide(10, 0)).to.throw('Division par zéro impossible');
    });
  });
});