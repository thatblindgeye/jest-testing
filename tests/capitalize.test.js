import capitalize from '../scripts/capitalize';

describe('Capitalize', function () {
  test('handles multiple words, e.g. "this is a test"', function () {
    expect(capitalize('this is a test.')).toBe('This is a test.');
  });

  test('handles a single word, e.g. "test"', function () {
    expect(capitalize('test.')).toBe('Test.');
  });

  test('handles empty strings', function () {
    expect(capitalize('')).toBe('');
  });

  test('numbers throw an error', function () {
    expect(() => capitalize(1)).toThrow('Argument passed in is not a string.');
  });

  test('arrays throw an error', function () {
    expect(() => capitalize(['this', 'is', 'a', 'test'])).toThrow(
      'Argument passed in is not a string.'
    );
  });

  test('missing argument throws an error', function () {
    expect(() => capitalize()).toThrow('Argument passed in is not a string.');
  });
});
