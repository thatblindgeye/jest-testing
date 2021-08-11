import reverseString from '../scripts/reverseString';

describe('Reverse String', function () {
  test('handles multiple words, e.g. "This is a test."', function () {
    expect(reverseString('This is a test.')).toBe('.tset a si sihT');
  });

  test('handles a single word, e.g. "Hooray!"', function () {
    expect(reverseString('Hooray!')).toBe('!yarooH');
  });

  test('handles empty strings', function () {
    expect(reverseString('')).toBe('');
  });

  test('missing argument throws an error', function () {
    expect(() => reverseString()).toThrow('Argument passed in is not a string');
  });
});
