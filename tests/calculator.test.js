import calculator from '../scripts/calculator';
const { add, subtract, multiply, divide } = calculator;

describe('Calculator', function () {
  describe('Add', function () {
    test('two positive numbers, e.g. 1 + 2', function () {
      expect(add(1, 2)).toEqual(3);
    });

    test('two negative numbers, e.g. -1 + -2', function () {
      expect(add(-1, -2)).toEqual(-3);
    });

    test('positive and negative numbers, e.g. -1 + 2', function () {
      expect(add(-1, 2)).toEqual(1);
    });
  });

  describe('Subtract', function () {
    test('smaller number from larger number, e.g. 2 - 1', function () {
      expect(subtract(2, 1)).toEqual(1);
    });

    test('larger number from smaller number, e.g. 1 - 2', function () {
      expect(subtract(1, 2)).toEqual(-1);
    });

    test('two negative numbers, e.g. -2 - -1', function () {
      expect(subtract(-2, -1)).toEqual(-1);
    });

    test('positive number from negative number, e.g. -2 - 1', function () {
      expect(subtract(-2, 1)).toEqual(-3);
    });

    test('negative number from positive number, e.g. 2 - -1', function () {
      expect(subtract(2, -1)).toEqual(3);
    });
  });

  describe('Multiply', function () {
    test('two positive numbers, e.g. 1 * 2', function () {
      expect(multiply(1, 2)).toEqual(2);
    });

    test('two negative numbers, e.g. -1 * -2', function () {
      expect(multiply(-1, -2)).toEqual(2);
    });

    test('positive and negative numbers, e.g. -1 * 2', function () {
      expect(multiply(-1, 2)).toEqual(-2);
    });
  });

  describe('Divide', function () {
    test('smaller number by larger number, e.g. 1 / 2', function () {
      expect(divide(1, 2)).toEqual(0.5);
    });

    test('larger number by smaller number, e.g. 2 / 1', function () {
      expect(divide(2, 1)).toEqual(2);
    });

    test('two negative numbers, e.g. -2 / -1', function () {
      expect(divide(-2, -1)).toEqual(2);
    });

    test('positive and negative numbers, e.g. 2 / -1', function () {
      expect(divide(2, -1)).toEqual(-2);
    });

    test('non-zero number by 0, e.g. 2 / 0', function () {
      expect(() => divide(2, 0)).toThrow('Cannot divide by zero');
    });

    test('0 by a non-zero number, e.g. 0 / 2', function () {
      expect(divide(0, 2)).toEqual(0);
    });
  });
});
