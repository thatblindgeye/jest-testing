const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num1 - num2;
  },

  multiply: function (num1, num2) {
    return num1 * num2;
  },

  divide: function (num1, num2) {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }

    return num1 / num2;
  },
};

export default calculator;
